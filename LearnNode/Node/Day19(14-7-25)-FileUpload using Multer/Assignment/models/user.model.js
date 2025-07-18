const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profileImage: String,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const Salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, Salt);
  next();
});

userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = { User };
