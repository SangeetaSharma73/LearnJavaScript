// src/middlewares/validate.js

const Joi = require("joi");

const validate = (schema) => (req, res, next) => {
  // Dynamically build schema based on incoming request data
  const validSchema = ["params", "query", "body"].reduce((acc, key) => {
    if (schema[key]) {
      // Only add schema for keys that are defined in the `schema`
      acc[key] = schema[key];
    }
    return acc;
  }, {});

  // Prepare the data to validate, extracting `params`, `query`, and `body`
  const data = ["params", "query", "body"].reduce((acc, key) => {
    if (req[key]) acc[key] = req[key];
    return acc;
  }, {});

  // Apply validation using the validSchema
  const { error } = Joi.compile(validSchema)
    .prefs({ errors: { label: "key" }, abortEarly: false })
    .unknown(true) // Allow extra properties (params, query, etc.)
    .validate(data);

  // Handle validation errors
  if (error) {
    return res
      .status(400)
      .json({ message: "Validation error", details: error.details });
  }

  // Proceed to next middleware if validation is successful
  next();
};

module.exports = validate;
