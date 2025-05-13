const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishYear: { type: Number, default: new Date().getFullYear() },
  createdAt: { type: Date, default: Date.now },
});

const bookModel = mongoose.model("Books", bookSchema);

module.exports = bookModel;
