const express=require("express")
const app=express ()
const port=3000
const morgan=require("morgan")
app.use(morgan("combined"))
const bodyParser=require("body-parser")
app.use(bodyParser.json())
//create default API
app.get("/", (req,res)=>{
res.send("Hello Restful API")
})
app.listen(port, ()=>{
console.log(`My Server listening on port ${port}`)
})


let database=[
    {"BookId":"b1","BookName":"Kỹ thuật lập trình cơ bản","Price":70,"Image":"b1.jpg"},
    {"BookId":"b2","BookName":"Kỹ thuật lập trình nâng cao","Price":100,"Image":"b2.jpg"},
    {"BookId":"b3","BookName":"Máy học cơ bản","Price":200,"Image":"b3.png"},
    {"BookId":"b4","BookName":"Máy học nâng cao","Price":300,"Image":"b4.png"},
    {"BookId":"b5","BookName":"Lập trình Robot cơ bản","Price":250,"Image":"b5.png"},
    ]

app.get("/books",cors(), (req,res)=>{
    res.send(database)
})
