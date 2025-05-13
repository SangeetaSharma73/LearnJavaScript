const express = require("express");
const { logger, userData } = require("./middleware/my.middleware");
const server = express();

const PORT = 3000;

server.get("/user/:user", logger, (req, res) => {
  const username = req.params.user;
  res.send(`👤 Hello, ${username}!`);
});

// Example: /user/sangeeta → 👤 Hello, sangeeta!

server.get("/search", userData, (req, res) => {
  const keyword = req.query.q;
  res.send(`🔍 You searched for: ${keyword}`);
});

// Example: /search?q=node → 🔍 You searched for: node

server.get("/check", (req, res) => {
  res.send("hello guys how are you?");
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
