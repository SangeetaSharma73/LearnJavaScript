const express = require("express");
const app = express();
const morgan = require("morgan");
const books = require("./routes/BookRoutes");
app.use(express.json()); //it is used for parse the data
app.use(morgan("dev")); //logging the api route in the console

app.use("/books/", books);
module.exports = { app };
