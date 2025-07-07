const express = require("express");
const PORT = 8080;
const app = express();
const session = require("express-session");
const path = require("path");

app.use(express.urlencoded({ extended: true })); // for form data
app.use(express.static(path.join(__dirname, "public"))); // to serve CSS/image

// ✅ Session middleware (this was missing!)
app.use(
  session({
    secret: "your-secret-key", // use a strong secret in production
    resave: false,
    saveUninitialized: true,
  })
);

// app.use("/static", express.static("public"));

app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   const username = "JhonDoe";
//   res.render("index", { username });
// });

// ✅ 1. From Query Parameters (e.g., /?username=John)

// app.get("/", (req, res) => {
//   const username = req.query.username || "Guest";
//   res.render("index", { username });
// });

// ✅ 2. From Route Parameters (e.g., /user/John)

// app.get("/user/:username", (req, res) => {
//   const username = req.params.username;
//   res.render("index", { username });
// });

// ✅ 3. From Request Body (POST Request, e.g., form submission)

app.post("/", (req, res) => {
  const username = req.body.username;
  req.session.username = username; // save to session
  res.redirect("/"); // redirect to GET /
});

// ✅ 4. From Session (for logged-in users)
// If you're using sessions (e.g., with express-session):

app.get("/", (req, res) => {
  const username = req.session.username || "Guest";
  res.render("index", { username });
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
