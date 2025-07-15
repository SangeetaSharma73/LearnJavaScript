const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();

// In-memory user store for demonstration
let users = [];
let idCounter = 1;

// CREATE user
router.post(
  "/users",
  [
    body("name")
      .isLength({ min: 2 })
      .withMessage("Name is required with minimum 2 length"),
    body("email").isEmail().withMessage("Valid email is required"),
  ],
  (req, res) => {
    console.log(typeof req.body.name, typeof req.body.email);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = { id: idCounter++, ...req.body };
    users.push(user);
    res.status(201).json(user);
  }
);

// READ all users
router.get("/users", (req, res) => {
  res.json(users);
});

// READ single user
router.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// UPDATE user
router.put(
  "/users/:id",
  [
    body("name")
      .optional()
      .isLength({ min: 2 })
      .withMessage("Name is required"),
    body("email").optional().isEmail().withMessage("Valid email is required"),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const user = users.find((u) => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).json({ message: "User not found" });
    Object.assign(user, req.body);
    res.json(user);
  }
);

// DELETE user
router.delete("/users/:id", (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "User not found" });
  users.splice(index, 1);
  res.json({ message: "User deleted" });
});

module.exports = router;
