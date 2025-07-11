// src/middlewares/validate.js

const Joi = require("joi");

const validate = (schema) => (req, res, next) => {
  const validSchema = ["params", "query", "body"].reduce((acc, key) => {
    if (schema[key]) acc[key] = schema[key];
    return acc;
  }, {});

  const data = ["params", "query", "body"].reduce((acc, key) => {
    if (req[key]) acc[key] = req[key];
    return acc;
  }, {});

  const { error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" }, abortEarly: false })
    .unknown(true) // ✅ allow unknown keys at top level
    .validate(data);

  if (error) {
    return res
      .status(400)
      .json({ message: "Validation error", details: error.details });
  }

  next();
};

module.exports = validate;
