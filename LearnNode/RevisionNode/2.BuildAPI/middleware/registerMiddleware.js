const validateUser = (req, res, next) => {
  const { username, email } = req.body;
  if (!username || !email) {
    return res.status(400).send("❌ Please provide username and email");
  }
  next();
};

module.exports = validateUser;
