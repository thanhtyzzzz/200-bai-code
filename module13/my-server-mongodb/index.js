const express = require('express');
const app = express();
const port = 3002;

const morgan=require("morgan")
app.use(morgan("combined"))

const bodyParser=require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


// app.use(bodyParser.json({ limit: '100mb' }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '100mb' }));

// app.use(express.json({ limit: '100mb' }));
// app.use(express.urlencoded({ limit: '100mb' }));
// app.use(express.json());


const cors=require("cors");
app.use(cors())

app.listen(port,()=>{
    console.log(`My Server listening on port ${port}`)
})

app.get("/",(req,res)=>{
    res.send("This Web server is processed for MongoDB")
})

const { MongoClient, ObjectId } = require('mongodb');
client = new MongoClient("mongodb://127.0.0.1:27017");
client.connect();
database = client.db("FashionData");
fashionCollection = database.collection("Fashion");

app.get("/fashions",cors(),async (req,res)=>{ //Bài 128 - Tạo và triệu gọi API -HTTP GET - List Fashion
    const result = await fashionCollection.find({}).toArray();
    res.send(result)
})

app.get("/fashions/:id",cors(),async (req,res)=>{ //Bài 129 – Tạo và triệu gọi API - HTTP GET – A Fashion
    var o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({_id:o_id}).toArray();
    res.send(result[0])
})


app.post("/fashions", cors(), async (req, res) => { //Bài 130 – Tạo và triệu gọi API - HTTP POST – Create a Fashion
    // put json Fashion into database
    await fashionCollection.insertOne(req.body)
    // send message to client (send all database to client)
    res.send(req.body)
})


app.put("/fashions", cors(), async (req, res) => {
    //update json Fashion into database
    await fashionCollection.updateOne(
        { _id: new ObjectId(req.body._id) },//condition for update
        {
            $set: { //Field for updating
                style: req.body.style,
                fashion_subject: req.body.fashion_subject,
                fashion_detail: req.body.fashion_detail,
                fashion_image: req.body.fashion_image
            }
        })
    //send Fahsion after updating
    var o_id = new ObjectId(req.body._id);
    const result = await fashionCollection.find({ _id: o_id }).toArray();
    res.send(result[0])
})

// delete fashion
app.delete("/fashions/:id", cors(), async (req, res) => {
    //find detail Fashion with id
    var o_id = new ObjectId(req.params["id"]);
    const result = await fashionCollection.find({ _id: o_id }).toArray();
    //update json Fashion into database
    await fashionCollection.deleteOne(
        { _id: o_id }
    )
    //send Fahsion after remove
    res.send(result[0])
})


var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get("/create-cookie",cors(),(req,res)=>{
    res.cookie("username","tranduythanh")
    res.cookie("password","123456")
    account={"username":"tranduythanh",
    "password":"123456"}
    res.cookie("account",account)
    res.send("cookies are created")
    })

app.get("/read-cookie",cors(),(req,res)=>{
    //cookie is stored in client, so we use req
    username=req.cookies.username
    password=req.cookies.password
    account=req.cookies.account
    infor="username = "+username+"<br/>"
    infor+="password = "+password+"<br/>"
    if(account!=null)
    {
    infor+="account.username = "+account.username+"<br/>"
    infor+="account.password = "+account.password+"<br/>"
    }
    res.send(infor)
    })

//Expires after 360000 ms from the time it is set.
res.cookie("infor_limit1", 'I am limited Cookie - way 1', {expire: 360000 + Date.now()});
res.cookie("infor_limit2", 'I am limited Cookie - way 2', {maxAge: 360000});

app.get("/clear-cookie",cors(),(req,res)=>{
    res.clearCookie("account")
    res.send("[account] Cookie is removed")
    })

