const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/userController");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", protect, getUserProfile);

// Admin-only route
router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.json({ message: "Welcome, Admin!" });
});

module.exports = router;
