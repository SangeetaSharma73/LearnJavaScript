const authController = require("../controllers/auth.controller");
const express = require("express");
const router = express.Router();
const { signupSchema, loginSchema } = require("../validations/auth.validation");
const validate = require("../middlewares/validate");

router.post("/signup", validate(signupSchema), authController.signup);
router.post("/login", validate(loginSchema), authController.login);

module.exports = router;
