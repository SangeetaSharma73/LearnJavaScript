const logger = (req, res, next) => {
  console.log(`📥 ${req.method} ${req.url}`);
  next(); // pass control to the next handler
};

const userData = (req, res, next) => {
  const keyword = req.query.q;
  if (keyword === "" || keyword.trim() === "") {
    console.log("Please enter valid name");
    return res.send("❌ Invalid search keyword");
  } else {
    console.log(keyword);
  }
  next();
};
module.exports = { logger, userData };
