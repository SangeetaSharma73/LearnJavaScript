// src/validations/user.validation.js

const Joi = require("joi");
const objectId = require("./custom.validation").objectId;

const createUser = {
  body: Joi.object({
    name: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
    role: Joi.string().valid("user", "admin"),
  }),
};

const updateUser = {
  body: Joi.object({
    name: Joi.string().min(2).max(50),
    email: Joi.string().email(),
    password: Joi.string().min(8),
    role: Joi.string().valid("user", "admin"),
  }).min(1),
};

module.exports = {
  createUser,
  updateUser,
};
