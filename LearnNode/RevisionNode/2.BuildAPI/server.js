const express = require("express");
const app = express();
const PORT = 8080;
const validateUser = require("./middleware/registerMiddleware");
const { router } = require("./routes/userRoutes");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

// 🔹 Third-party middleware
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
// console.log(router);

app.use(express.json()); // to parse JSON
app.use(express.static("public"));

app.use("/users", router);
// app.use(express.urlencoded({ extended: true })); // to parse form data

// app.post("/register", validateUser, (req, res) => {
//   const { username, password } = req.body;
//   res.send(`📥 Registered: ${username}`);
// });

// app.get("/test", (req, res) => {
//   console.log("server is running perfectly");
//   res.send("You are good to go.");
// });

// app.post("/api/users", (req, res) => {
//   //   console.log(req.body);
//   const { username, email } = req.body;
//   res.send(`Username : ${username} received email: ${email}`);
// });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
