const express = require("express");
const routings = require("./route");
const routeInfoMiddleware = require("./Middlewares/routeInfo");
require("dotenv").config();

const PORT = process.env.PORT;
const server = express();

server.get("/", (req, res) => {
  res.json({ data: "Server is healthy" });
});
server.use(routeInfoMiddleware);
server.use("/learning", routings);

server.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
