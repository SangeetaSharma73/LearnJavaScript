const {
  postProduct,
  getAll,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productCOntroller");
const express = require("express");
const routes = express.Router();

routes.post("/create", postProduct);
routes.get("/all", getAll);
routes.get("/:id", getProduct);
routes.put("/:id", updateProduct);
routes.delete("/:id", deleteProduct);

module.exports = routes;
