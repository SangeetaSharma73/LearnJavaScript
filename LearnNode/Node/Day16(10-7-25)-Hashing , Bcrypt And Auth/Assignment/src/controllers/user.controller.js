// src/controllers/user.controller.js

const userService = require("../services/user.service");
const catchAsync = require("../utils/catchAsync");
const httpStatus = require("http-status"); // Correct import for v2.x
const user = require("../models/user.model");

const getAll = async (req, res) => {
  const users = await user.find();
  res.json(users);
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
