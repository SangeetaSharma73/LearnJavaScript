const express = require("express");
const router = express.Router();

const products = [
  {
    id: 1,
    title: "t-shirt",
    qty: 4,
    price: 122,
  },
  {
    id: 2,
    title: "t-shirt",
    qty: 4,
    price: 122,
  },
  {
    id: 3,
    title: "t-shirt",
    qty: 4,
    price: 122,
  },
  {
    id: 4,
    title: "t-shirt",
    qty: 4,
    price: 122,
  },
];
router.get("/", (req, res) => {
  if (!products) {
    return res.status(404).json({ error: "Products not found" });
  }

  res.json(products);
});

router.get("/:id", (req, res) => {
  //   console.log(typeof Number(req.params.id));
  const productId = Number(req.params.id);
  const product = products.find((product) => product.id === productId);
  //   console.log(product);
  if (!product) {
    return res.status(404).json({ error: "Product not found" });
  }

  res.json(product);
});

module.exports = router;
