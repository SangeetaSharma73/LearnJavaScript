const mongoose = require("mongoose");

const connectDB = (req, res) => {
  try {
    mongoose.connect("mongodb://127.0.0.1:27017/AssignmentDb");
    console.log("server is connected with db");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
