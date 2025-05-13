const connectDB = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT;
const { app } = require("./app");

connectDB();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
