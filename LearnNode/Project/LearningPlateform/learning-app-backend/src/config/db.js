const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb connected ...`);
  } catch (error) {
    console.error(`Mongodb connection error..`, error);
  }
};

module.exports = connectDb;
