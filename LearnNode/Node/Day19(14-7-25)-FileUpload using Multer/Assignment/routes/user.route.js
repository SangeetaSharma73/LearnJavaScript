const express = require("express");
const router = express.Router();
const upload = require("../config/multer.config"); // path to the multer config
const { User } = require("../models/user.model");

// POST route with image upload
router.post("/register", upload.single("profileImage"), async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const profileImage = req.file ? req.file.filename : "";

    const newUser = new User({
      name,
      email,
      password,
      profileImage,
    });

    await newUser.save();

    res.status(201).json({ msg: "User registered", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
