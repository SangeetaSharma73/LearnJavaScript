require("dotenv").config();
const app = require("./app");
const connectDB = require("./config/db");

//connect to db
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
