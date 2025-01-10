const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
  },
  {
    versionkey: false,
  }
);

const UserModel = mongoose.model("user",userSchema);

module.exports= {UserModel}