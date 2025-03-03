const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  let token = req.header.authorization;

  if (!token || !token.startswith("Bearer")) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    token = token.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(404).json({ msg: "Invalid token" });
  }
};

module.exports = protect;
