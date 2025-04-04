const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const profileImage = req.file ? req.file.path : null; // Store uploaded image path

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      profileImage,
    });

    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
};


exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const profileImage = req.file ? req.file.path : null;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { profileImage },
      { new: true }
    );

    res.json({ message: "Profile updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Error updating profile", error });
  }
};



exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ message: "Login error", error });
  }
};
