// models/Message.js
const mongoose = require("mongoose");
module.exports = mongoose.model(
  "Message",
  new mongoose.Schema({
    sender: { type: mongoose.Types.ObjectId, ref: "User" },
    recipient: { type: mongoose.Types.ObjectId, ref: "User" }, // null for public
    content: String,
    createdAt: { type: Date, default: Date.now },
  })
);
