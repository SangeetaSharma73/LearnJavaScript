const express = require("express");
const { register, login ,updateProfile} = require("../controllers/authController");
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

router.post("/register", register);
router.post("/login", login);

router.put(
  "/update-profile",
  authMiddleware,
  upload.single("profileImage"),
  updateProfile
);

module.exports = router;
