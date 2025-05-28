const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { dbConnect } = require("./config/db");
const postRoutes = require("./routes/postRoutes");
const cors = require("cors");
dotenv.config();
const productRoutes = require("./routes/productRoutes");
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("get api working");
  res.send("api working");
});
app.use("/posts", postRoutes);
app.use("/products", productRoutes);
// let products = [];
// let currentId = 1;
// app.post("/products", (req, res) => {
//   const product = { id: currentId++, ...req.body };
//   products.push(product);
//   res.status(201).json(product);
// });

// app.get("/allProducts", (req, res) => {
//   res.json(products);
// });

// app.get("/product/:id", (req, res) => {
//   const product = products.find((p) => parseInt(req.params.id) === p.id);
//   if (!product) return res.status(404).send("product not found");
//   res.json(product);
// });

// app.put("/product/:id", (req, res) => {
//   let product = products.find((p) => parseInt(req.params.id) === p.id);
//   if (!product) return res.status(404).send("product not found");
//   product = req.body;
//   res.json(product);
// });

// app.delete("/product/:id", (req, res) => {
//   // const id = parseInt(req.params.id);
//   console.log(typeof req.params.id);
//   const index = products.findIndex((p) => p.id === id);
//   if (index === -1) return res.status(404).send("not found");

//   products.splice(index, 1);
//   res.send("product deleted");
// });

dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
