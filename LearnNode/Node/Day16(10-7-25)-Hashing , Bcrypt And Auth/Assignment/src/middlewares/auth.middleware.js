const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

exports.auth = async (req, res, next) => {
  // console.log(req.headers.authorization.split(" ")[1]);
  const token = req.headers.authorization?.split(" ")[1] || null;
  // console.log(token);
  if (!token)
    return res.status(401).json({ message: "Not authorized, no token" });
  try {
    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(verifiedUser.id).select("-password");
    // console.log(req.user);

    if (!req.user) throw new Error("User not found");
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: `Not authorized, token failed ${error}` });
  }
};
