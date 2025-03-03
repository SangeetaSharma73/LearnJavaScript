const express = require("express");
const User = require("../models/User");
const {
  hashPassword,
  comparePassword,
  generateToken,
} = require("../utils/auth");
const router = express.Router();

//register
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExist) return res.status(401).json({ msg: "user already exist" });

  const hashedPassword = await hashedPassword(password);
  const user = await User.create({ name, email, password: hashedPassword });
  res.status(201).json({ token: generateToken(user) });
});


// Login User
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || !(await comparePassword(password, user.password))) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({ token: generateToken(user) });
});

// Protected Route
router.get("/profile", require("../middleware/authMiddleware"), async (req, res) => {
    const user = await User.findById(req.user.id);
    res.json(user);
});

module.exports = router;