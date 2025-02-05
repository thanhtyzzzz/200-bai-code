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

const cors=require("cors")
app.use(cors())

let database = [
    { "BookId": "b1", "BookName": "Kỹ thuật lập trình cơ bản", "Price": 70, "Image": "b1.png" },
    { "BookId": "b2", "BookName": "Kỹ thuật lập trình nâng cao", "Price": 100, "Image": "b2.png" },
    { "BookId": "b3", "BookName": "Máy học cơ bản", "Price": 200, "Image": "b3.png" },
    { "BookId": "b4", "BookName": "Máy học nâng cao", "Price": 300, "Image": "b4.png" },
    { "BookId": "b5", "BookName": "Lập trình Robot cơ bản", "Price": 250, "Image": "b5.png" }
  ];
  
// API lấy danh sách tất cả các cuốn sách
app.get("/books", cors(), (req, res) => {
    res.send(database);  // Trả về toàn bộ mảng dữ liệu "database"
});

// API lấy thông tin sách theo ID
app.get("/books/:id", cors(), (req, res) => {
    // Lấy ID từ URL
    const id = req.params["id"];
    // Tìm sách theo BookId
    const p = database.find(x => x.BookId === id);
    res.send(p);  // Trả về sách tìm được (nếu có)
});

// API thêm một cuốn sách mới vào database
app.post("/books", cors(), (req, res) => {
    // Thêm sách mới vào mảng database
    database.push(req.body);  
    res.send(database);  // Trả về danh sách sách đã được cập nhật
});

// API cập nhật thông tin cuốn sách theo BookId
app.put("/books", cors(), (req, res) => {
    // Tìm cuốn sách cần cập nhật theo BookId
    const book = database.find(x => x.BookId === req.body.BookId);
    if (book != null) {
        // Cập nhật thông tin sách
        book.BookName = req.body.BookName;
        book.Price = req.body.Price;
        book.Image = req.body.Image;
    }
    res.send(database);  // Trả về danh sách sách đã được cập nhật
});

// API xóa cuốn sách theo ID
app.delete("/books/:id", cors(), (req, res) => {
    // Lấy ID từ URL
    const id = req.params["id"];
    // Lọc ra các sách không có BookId trùng với ID muốn xóa
    database = database.filter(x => x.BookId !== id);
    res.send(database);  // Trả về danh sách sách sau khi đã xóa
});

// Khởi động server trên port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});