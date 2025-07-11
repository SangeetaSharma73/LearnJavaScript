const User = require("../models/user.model");

const getUserById = async (id) => {
  return await User.findById(id).select("-password");
};

const createUser = async (userData) => {
  const user = new User(userData);
  return await user.save();
};

const updateUser = async (id, userData) => {
  const result = await User.findByIdAndUpdate(id, userData, {
    new: true,
  });
  return result != null;
};

const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

module.exports = { getUserById, createUser, updateUser, deleteUser };
