const Books = require("../models/Book");

//get all books data
const getAllBooks = async (req, res) => {
  const allBooks = await Books.find();
  res.json({ success: true, data: allBooks });
};

//get one book using id
const getBook = async (req, res) => {
  const book = await Books.find((b) => b.id == req.params.id);
  if (!book) return res.status(404).json({ err: "Book not found" });
  res.json({ success: true, data: book });
};

const createBook = async (req, res) => {
  try {
    const book = await Books.create(req.body);
    res.status(201).json({ success: true, data: book });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Books.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!book) return res.status(404).json({ error: "Book not found" });
    res.json({ success: true, data: book });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const deleteBook = async (req, res) => {
  const book = await Books.findByIdAndDelete((b) => b.id == req.params.id);
  if (!book) return res.status(404).json({ error: "Book not found" });
  res.status(204).send();
};

module.exports = { getAllBooks, getBook, createBook, updateBook, deleteBook };
