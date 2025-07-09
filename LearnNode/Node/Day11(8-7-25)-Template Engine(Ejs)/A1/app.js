const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");
app.set("views", "./views");
app.set("view engine", "ejs");
console.log("Views Directory:", path.join(__dirname, "views"));
console.log(
  "Partial Path: ",
  path.join(__dirname, "views", "partials", "header.ejs")
);
app.get("/", (req, res) => {
  res.render("pages/home", { name: "Sangeeta Sharma" });
});

app.get("/index", (req, res) => {
  res.render("pages/index", { name: "Sangeeta Sharma" });
});
app.get("/about", (req, res) => {
  res.render("pages/about", { name: "sangeeta", age: "22", education: "MCA" });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
