const express = require("express");
const app = express();
const PORT = 8080;
const productRoutes = require("./routes/products");
// app.use(express.json())
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
