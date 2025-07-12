const authService = require("../services/auth.service");
const { generateToken } = require("../utils/jwt");
const httpStatus = require("http-status");
// const comparePassword = require("");
exports.signup = async (req, res) => {
  const existingUser = await authService.findUserByEmail(req.body.email);
  if (existingUser) return res.status(409).json({ msg: "User already exist" });

  const user = await authService.createUser(req.body);
  const token = generateToken(user);
  res.status(201).json({
    user: { id: user._id, name: user.name, email: user.email },
    token,
  });
};

exports.login = async (req, res) => {
  //   console.log("email login", req.body.email);
  //   console.log("password login", req.body.password);
  const user = await authService.findUserByEmail(req.body.email);
  if (!user) {
    return res
      .status(400)
      .json({ error: "Invalid credentials Email not match" });
  }
  const isMatch = await user.comparePassword(req.body.password);
  if (!isMatch)
    return res
      .status(400)
      .json({ error: "Invalid credentials password is not same" });

  const token = generateToken(user);
  res
    .status(200)
    .json({
      user: { id: user._id, name: user.name, email: user.email },
      token,
    });
};
