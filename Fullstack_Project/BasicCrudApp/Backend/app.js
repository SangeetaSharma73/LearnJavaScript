const express = require("express");
const app = express();
const dotenv = require("dotenv");
const { dbConnect } = require("./config/db");
const postRoutes = require("./routes/postRoutes");
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  console.log("get api working");
  res.send("api working");
});
app.use("/posts", postRoutes);
dbConnect();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
