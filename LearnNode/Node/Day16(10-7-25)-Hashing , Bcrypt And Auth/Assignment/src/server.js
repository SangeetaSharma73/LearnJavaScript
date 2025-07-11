const express = require("express");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
const PORT = 8080;
app.use(express.json());

app.use("/users", userRoutes);

connectDB();
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
