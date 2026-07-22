const express = require("express");
const app = express();

// Middleware
app.use(express.json());

let books = [
  {
    id: "1",
    title: "book 10",
  },
  {
    id: "2",
    title: "book 2",
  },
  {
    id: "3",
    title: "book 3",
  },
];

// Intro route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to our Bookstore API",
  });
});

// Get all books
app.get("/get", (req, res) => {
  res.json(books);
});

// Get a single book
app.get("/get/:id", (req, res) => {
  const book = books.find((item) => item.id === req.params.id);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({
      message: "Book not found! Please try with different Book ID",
    });
  }
});

// Add a new book
app.post("/add", (req, res) => {
  const newBook = {
    id: Math.floor(Math.random() * 1000).toString(),
    title: `Book ${Math.floor(Math.random() * 1000)}`,
  };

  books.push(newBook);

  res.status(200).json({
    data: newBook,
    message: "New Book is added successfully",
  });
});

// update a book
app.put("/update/:id", (req, res) => {
  const findCurrentBook = books.find(
    (bookItem) => bookItem.id === req.params.id,
  );
  if (findCurrentBook) {
    findCurrentBook.title = req.body.title || findCurrentBook.title;

    res.status(200).json({
      message: `Book with ID ${req.params.id} updated successfully`,
      data: findCurrentBook,
    });
  } else {
    res.status(404).json({
      message: "Book not found ",
    });
  }
});

// delete the book

app.delete("/delete/: id", (req, res) => {
  const findIndexOfCurrentBook = books.findIndex(
    (item) => item.id === req.params.id,
  );
  if (findIndexOfCurrentBook !== -1) {
    const deletedBook = books.splice(findIndexOfCurrentBook, 1);
    res.status(200).json({
      message: "Book deleted successfully",
      data: deleted[0],
    });
  } else {
    res.status(404).json({
      message: "Book not found",
    });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is now running on port ${port}`);
});
