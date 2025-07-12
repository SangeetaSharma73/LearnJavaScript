const express = require("express");
const app = express();
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes");
require("dotenv").config();
const authRoutes = require("./routes/auth.routes");
const PORT = process.env.PORT;
app.use(express.json());

app.use("/users", userRoutes);
app.use("/api/auth", authRoutes);

connectDB();
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
