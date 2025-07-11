const express = require("express");
const userController = require("../controllers/user.controller");
const validate = require("../middlewares/validate");
const userValidation = require("../validations/user.validation");

const router = express.Router();

router.get("/", userController.getAll);

// GET /api/users/:id
router.get("/:id", userController.getUserById);

// POST /api/users
router.post(
  "/",
  validate(userValidation.createUser),
  userController.createUser
);

// PUT /api/users/:id
router.put(
  "/:id",
  validate(userValidation.updateUser),
  userController.updateUser
);

// DELETE /api/users/:id
router.delete("/:id", userController.deleteUser);

module.exports = router;
