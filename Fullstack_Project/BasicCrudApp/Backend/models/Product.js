const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String },
  title: { type: String },
  description: { type: String },
});

const ProductSchema = mongoose.model("Product", productSchema);

module.exports = ProductSchema;
