const express = require("express");
const PORT = 8080;
const app = express();
const { connectDB } = require("./config/db");
const userRoutes = require("./routes/user.route");
app.use(express.json());
// app.use()
// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });
app.use("/uploads", express.static("uploads"));
app.use("/users", userRoutes);
connectDB();
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
