const express = require("express");
const app = express();
const PORT = 8080;
app.set("view engine", "ejs");
const posts = [
  { id: 1, title: "First Blog Post", content: "Hello world!" },
  { id: 2, title: "Second Post", content: "Learning EJS is fun!" },
];
app.use(express.static("public")); //This tells Express to serve everything inside the /public folder.

app.get("/", (req, res) => {
  res.render("pages/blog", { posts });
});
app.get("/about", (req, res) => {
  res.render("pages/about", { posts });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
