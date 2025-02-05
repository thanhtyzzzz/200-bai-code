const express = require('express');
const app = express();
const port = 4000;

const morgan = require("morgan")
app.use(morgan("combined"))

// payload limit 10mb
const bodyParser = require("body-parser")
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb' }));
app.use(express.json());

const cors = require("cors");
app.use(cors())

app.listen(port, () => {
    console.log(`Server-Fashion listening on port ${port}`)
})

app.get("/api", (req, res) => {
    res.send("This Web server is processed for MongoDB")
})
const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("FashionData");
fashionCollection = database.collection("Fashion");

// get all fashions sorted by date_added field
app.get("/api/fashions", cors(), async (req, res) => {
    try {
        const result = await fashionCollection.find({}).sort({ date_added: -1 }).toArray();
        res.send(result)
    }
    catch (err) {
        res.send(err)
    }
})

// get fashion by id
app.get("/api/fashions/:id", cors(), async (req, res) => {
    try {
        var o_id = new ObjectId(req.params["id"]);
        const result = await fashionCollection.find({ _id: o_id }).toArray();
        res.send(result[0])
    } catch (err) {
        res.send(err)
    }
})

// get fashion by style with lowercase and uppercase
app.get("/api/fashions/style/:style", cors(), async (req, res) => {
    try {
        const result = await fashionCollection.find({ style: { $regex: new RegExp(req.params["style"], "i") } }).toArray();
        res.send(result)
    }
    catch (err) {
        res.send(err)
    }
})

// post fashion
app.post("/api/fashions", cors(), async (req, res) => {
    try {
        // put json Fashion into database
        await fashionCollection.insertOne(req.body)
        // send message to client (send all database to client)
        res.send(req.body)
    } catch (err) {
        res.send(err)
    }
})

// put fashion
app.put("/api/fashions", cors(), async (req, res) => {
    //update json Fashion into database
    try {
        await fashionCollection.updateOne(
            { _id: new ObjectId(req.body._id) },//condition for update
            {
                $set: { //Field for updating
                    style: req.body.style,
                    fashion_subject: req.body.fashion_subject,
                    fashion_detail: req.body.fashion_detail,
                    fashion_image: req.body.fashion_image,
                    date_added: req.body.date_added
                }
            }
        )
        // send Fashion after updating
        var o_id = new ObjectId(req.body._id);
        const result = await fashionCollection.find({ _id: o_id }).toArray();
        res.send(result[0])
    }
    catch (err) {
        res.send(err)
    }
})

// delete fashion
app.delete("/api/fashions/:id", cors(), async (req, res) => {
    try {
        // find detail Fashion with id
        var o_id = new ObjectId(req.params["id"]);
        const result = await fashionCollection.find({ _id: o_id }).toArray();
        // delete json Fashion from database
        await fashionCollection.deleteOne({ _id: o_id })
        // send message to client
        res.send(result[0])
    } catch (err) {
        res.send(err)
    }
})