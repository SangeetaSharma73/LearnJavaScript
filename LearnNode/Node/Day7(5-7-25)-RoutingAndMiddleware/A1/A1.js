const express = require("express");
const app = express();
const PORT = 5000;
const logging = (req, res, next) => {
  console.log(`URL and method : ${req.url}, ${req.method} `);
  next();
};

app.post("/product/:productId", logging, (req, res) => {
  res.status(200).json({ productId: req.params.productId });
});

app.get("/search", logging, (req, res) => {
  console.log(req.query.term, req.query.category);
  res.json({ term: req.query.term, category: req.query.category });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
