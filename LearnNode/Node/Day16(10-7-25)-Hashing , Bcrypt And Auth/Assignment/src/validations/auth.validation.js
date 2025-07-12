const Joi = require("joi");

const signupSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.name": "name must be valid",
    "string.empty": "Name is required",
  }),
  email: Joi.string().email().required().messages({
    "string.email": "Email must be valid",
    "string.empty": "Email is required",
  }),
  password: Joi.string().trim().min(8).required().messages({
    "string.password": "password must be valid",
    "string.empty": "password is required",
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Email must be valid",
    "string.empty": "Email is required",
  }),
  password: Joi.string().required().messages({
    "string.password": "password must be valid",
    "string.empty": "password is required",
  }),
});

module.exports = { signupSchema, loginSchema };
