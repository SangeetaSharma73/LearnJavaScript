const User = require("../models/user.model");

const getAll = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) return res.status(404).json({ msg: "no user found" });
    res.status(200).json(users);
  } catch (err) {
    console.log(err, err.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status.json({ msg: "user not found" });
    res.status(200).json(user);
  } catch (err) {
    console.log(err, err.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const getUserByIdAndUpdate = async (req, res) => {
  try {
    const userData = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!userData) return res.status(404).json({ msg: "no user found" });
    res.status(200).json(userData, { msg: "user successfully updated" });
  } catch (err) {
    console.log(err, err.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const postUser = async (req, res) => {
  try {
    const userData = new User(req.body);
    await userData.save();
    res.status(201).json({ msg: "User successfully created", user: userData });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ msg: "no user found" });
    res.status(200).json(user, { msg: "user successfully deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

module.exports = {
  getAll,
  getUserById,
  postUser,
  getUserByIdAndUpdate,
  deleteUser,
};
