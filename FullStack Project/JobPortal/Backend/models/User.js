
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String, // Should be hashed before storing
  role: { type: String, enum: ["job_seeker", "recruiter"], required: true },
  profileImage: { type: String }, // Store image URL
});

module.exports = mongoose.model("User", userSchema);
