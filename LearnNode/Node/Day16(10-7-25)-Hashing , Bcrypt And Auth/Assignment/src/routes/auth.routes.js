const authController = require("../controllers/auth.controller");
const express = require("express");
const router = express.Router();
const { signupSchema, loginSchema } = require("../validations/auth.validation");
const validate = require("../middlewares/validate");
const { authorizeRoles } = require("../middlewares/role.middleware");
const { auth } = require("../middlewares/auth.middleware");

router.post("/signup", validate(signupSchema), authController.signup);
router.post("/login", auth, validate(loginSchema), authController.login);
router.get("/admin", auth, authorizeRoles("admin"), (req, res) => {
  res.status(200).json({ message: "Welcome Admin!" });
});
router.get("/verify-email", authController.verifyEmail);
router.post("/refresh-token", authController.refreshToken);

module.exports = router;
