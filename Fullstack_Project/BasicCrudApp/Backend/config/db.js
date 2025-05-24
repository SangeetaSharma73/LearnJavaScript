const mongoose = require("mongoose");

const dbConnect = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`db connected`);
  } catch (err) {
    console.error(err);
    process.exit();
  }
};

module.exports = { dbConnect };
