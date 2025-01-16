// Express Routing and Middleware
const express = require("express");
const app = express();
const fs = require("fs");
const {logger,timeLogger}=require('./middleware');
// app.use((req, res, next) => {
//   //   console.log("THis is the custom middleware");
//   //   next();
//   //   console.log('this is again custom middleware');
//   fs.appendFile("log.txt", `Route:${req.url} | Method:${req.method} | Time:${Date()}`, (err) => {
//     if (err) {
//       console.error(err);
//     }
//     // console.log(log.txt);
//     next();
//   });
// });

// const logger = (req, res, next) => {
//   fs.appendFileSync(
//     "./log.txt",
//     `Route:${req.url} | Method:${req.method} | Time:${Date()}\n`
//   );
//   next();
// };

app.use(logger,timeLogger);

app.get("/", (req, res) => {
  console.log("Hello from the Home Page");
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.listen("8080", () => {
  console.log("Server running on http://localhost:8080");
});
