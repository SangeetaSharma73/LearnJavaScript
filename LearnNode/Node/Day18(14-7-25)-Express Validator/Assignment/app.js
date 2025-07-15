const express = require("express");
const PORT = 8080;
const app = express();
const userRoutes = require("./router");
app.use(express.json());
app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
