const Product = require("../models/Product");
const { getPost } = require("./postController");

const postProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Product created", product });
  } catch (err) {
    console.error(err, { " mesaage": err.message });
  }
};

const getAll = async (req, res) => {
  try {
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (err) {
    console.error(err, { " mesaage": err.message });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    console.error(err);
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json(product);
  } catch (err) {
    console.error(err);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.json(product, { message: "product deleted successfully" });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  postProduct,
  getAll,
  getProduct,
  updateProduct,
  deleteProduct,
};
