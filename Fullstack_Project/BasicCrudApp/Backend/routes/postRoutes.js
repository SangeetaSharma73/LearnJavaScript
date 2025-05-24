const express = require("express");
const router = express.Router();
const {
  post,
  getAllPost,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");

router.post("/create", post);
router.get("/getAllPost", getAllPost);
router.get("/getPost/:id", getPost);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);

module.exports = router;
