const Post = require("../models/Post");

const post = async (req, res) => {
  try {
    const post = await Post({ ...req.body });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.log(err);
  }
};

const getAllPost = async (req, res) => {
  try {
    const allPost = await Post.find();
    res.json(allPost);
  } catch (err) {
    console.log(err);
  }
};

const getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json(post);
  } catch (err) {
    console.log(err);
  }
};

const updatePost = async (req, res) => {
  try {
    const updatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updatePost);
  } catch (err) {
    console.log(err);
  }
};

const deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: "post deleted" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { post, getAllPost, getPost, updatePost, deletePost };
