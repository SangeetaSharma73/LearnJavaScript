const mongoose = require("mongoose");

const connectDB = (req, res) => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("server is connected with db");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = connectDB;
