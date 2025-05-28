const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  resetPasswordToken: String,
  resetPasswordExpire: Date,
});

//hash password
userSchema.pre("Save", async (next) => {
  if (!this.isModified(password)) return next();
  this.password = await bcrypt.hash(this.password, salt(10));
  next();
});

//compare password
userSchema.methods.matchPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

// Generate reset token
userSchema.methods.getResetToken = function () {
  const token = crypto.randomBytes(20).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");
  this.resetPasswordExpire = Date.now() + 10 * 60 * 1000;
  return token;
};

module.exports = mongoose.model("User", userSchema);
