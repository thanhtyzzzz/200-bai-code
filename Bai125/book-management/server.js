const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Cấu hình middleware
app.use(cors());
app.use(bodyParser.json());  // Dùng để xử lý JSON trong body request

// Dữ liệu giả lập (mock database)
let books = [
  { "BookId": "b1", "BookName": "Cấu trúc dữ liệu", "Author": "Tác giả 1", "Price": 100, "Description": "Sách về cấu trúc dữ liệu", "Image": "b1.jpg" },
  { "BookId": "b2", "BookName": "Lập trình web", "Author": "Tác giả 2", "Price": 150, "Description": "Hướng dẫn lập trình web", "Image": "b2.jpg" }
];

// Lấy tất cả sách
app.get("/books", (req, res) => {
  res.json(books);
});

// Lấy thông tin sách theo ID
app.get("/books/:id", (req, res) => {
  const book = books.find(b => b.BookId === req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

// Thêm sách mới
app.post("/books", (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
});

// Cập nhật sách theo ID
app.put("/books/:id", (req, res) => {
  const book = books.find(b => b.BookId === req.params.id);
  if (book) {
    Object.assign(book, req.body);  // Cập nhật thông tin sách
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

// Xóa sách theo ID
app.delete("/books/:id", (req, res) => {
  books = books.filter(b => b.BookId !== req.params.id);
  res.status(204).send();
});

// Chạy server tại port 3000
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
