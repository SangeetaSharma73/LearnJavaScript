const express = require("express");
const app = express();

app.get("/greet/:name", (req, res) => {
  res.send(`Hello, ${req.params.name}`);
});

app.get("/details", (req, res) => {
  res.set("X-Custom", "test-header");
  res.json({
    city: req.query.city,
    role: req.query.role,
  });
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
