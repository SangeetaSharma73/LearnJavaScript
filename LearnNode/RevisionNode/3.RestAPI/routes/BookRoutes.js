const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/BookController");

router.get("/all", getAllBooks);
router.get("/:id", getBook);
router.post("/create", createBook);
router.put("/update", updateBook);
router.delete("/delete", deleteBook);

module.exports = router;
