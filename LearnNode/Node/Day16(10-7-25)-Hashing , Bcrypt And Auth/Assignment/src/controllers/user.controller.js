// src/controllers/user.controller.js

const userService = require("../services/user.service");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status"); // Correct import for v2.x
const User = require("../models/user.model");

const getAll = async (req, res) => {
  const limit = 5;
  const page = parseInt(req.query.page) || 1;
  try {
    const { email, name } = req.query;
    const query = {}; // Empty query object

    if (email) query.email = email; // If email is passed, add to query
    if (name) query.name = name; // If name is passed, add to query

    const users = await User.find(query)
      .skip((page - 1) * limit) // Skip records based on the page
      .limit(limit); // Limit the number of records returned; // Query the database

    if (users.length === 0) {
      return res.status(404).json({ message: "No users found." });
    }

    return res.status(200).json(users); // Send the result back to the client
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
//GET /api/users/:id
const getUserById = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.id);

  if (!user)
    return res.status(httpStatus.NOT_FOUND).json({ msg: "User not found" });

  res.status(httpStatus.OK).json(user);
});

//POST /api/users/
const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).json(user); // Correct use of CREATED
});

// PUT /api/users/:id
const updateUser = catchAsync(async (req, res) => {
  const updateUser = await userService.updateUser(req.params.id, req.body);
  if (!updateUser)
    return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
  res.status(httpStatus.OK).json(updateUser);
});

// DELETE /api/users/:id
const deleteUser = catchAsync(async (req, res) => {
  const result = await userService.deleteUser(req.params.id);

  if (!result) {
    return res.status(httpStatus.NOT_FOUND).json({ message: "User not found" });
  }

  res.status(httpStatus.NO_CONTENT).send(); // Correct use of NO_CONTENT
});

module.exports = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getAll,
};
