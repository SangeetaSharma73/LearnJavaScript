const express = require("express");
const routeInfoMiddleware = require("./Middlewares/routeInfo");

const routings = express.Router();

routings.get("/route1", (req, res) => {
  return res.status(200).json({ msg: "this is route 1 inside learning route" });
});

routings.get("/route-info", routeInfoMiddleware, (req, res) => {
  console.log("inside route info ");
  return res
    .status(200)
    .json({ msg: "this is route info inside learning route" });
});

module.exports = routings;
