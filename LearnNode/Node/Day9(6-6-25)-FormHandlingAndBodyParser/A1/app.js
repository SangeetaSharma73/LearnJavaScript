const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.urlencoded({ extended: true })); // parse form data

app.get("/register", (req, res) => {
  res.send(`
    <form action="/register" method="POST">
      <label>Name:</label><input type="text" name="name" />
      <label>Email:</label><input type="email" name="email" />
      <button type="submit">Register</button>
    </form>
  `);
});

app.post("/register", (req, res) => {
  console.log(req.body);
  const { name, email } = req.body;
  res.send(`<h1>Welcome ${name}! Your email is ${email}</h1>`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
