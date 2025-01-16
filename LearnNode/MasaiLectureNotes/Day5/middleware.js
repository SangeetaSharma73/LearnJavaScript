const fs = require("fs");

const logger = (req, res, next) => {
  fs.appendFileSync(
    "./log.txt",
    `Route:${req.url} | Method:${req.method} | Time:${Date()}\n`
  );
  next();
};

const timeLogger = (req, res, next) => {
  startTime = Date.now();
  next();
  endTime = Date.now();
  console.log(`Processing time is:${endTime-startTime}ms`);
};
module.exports = { logger,timeLogger };
