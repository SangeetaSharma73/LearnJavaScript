const mongoose = require("mongoose");

const connectDB = async (req, res) => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/day19?");
    console.log("mongodb connected");
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = { connectDB };
