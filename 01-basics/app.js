const express = require("express");

const app = express();

app.use(express.json());

let books = [
  {
    id: 1,
    title: "Book 1",
  },
  {
    id: 2,
    title: "Book 2",
  },
  {
    id: 3,
    title: "Book 3",
  },
];

// Intro route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our bookstore API",
  });
});

// Get all books
app.get("/books", (req, res) => {
  res.json(books);
});

// Get a single book
app.get("/books/:id", (req, res) => {
  const book = books.find((item) => item.id === Number(req.params.id));

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "Book not found! Please try with a different ID.",
    });
  }
});

// add a new book

app.post("/add", (req, res) => {
  const newBook = {
    id: books.length + 1,
    title: `Book ${books.length + 1}`,
  };

  books.push(newBook);
  res.status(200).json({
  data: newBook,
  message: "New Book is added successfully"
  
  
  })
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is now running on port ${port}`);
});
