const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const app = express();

require("dotenv").config(); // Load environment variables
const connectDb = require("./config/db"); // Adjust the path as necessary
const startServer = async () => {
  await connectDb(); // Connect to MongoDB
  // Start your server here
};
startServer();
//connect to database
connectDb();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Routes
app.use("/api/auth", authRoutes);

module.exports = app;
