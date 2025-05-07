const express = require("express");
const router = express.Router();
const usersData = require("../users");

router.get("/allData", (req, res) => {
  res.json(usersData);
});

router.get("/user/:id", (req, res) => {
  const user = usersData.find((u) => u.id == req.params.id);
  if (!user) return res.status(404).send("❌ User not found");
  res.json(user);
});

router.post("/create/user", (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: usersData.length + 1, name, email };
  usersData.push(newUser);
  res.status(201).json(newUser);
});

router.put("/update/:id", (req, res) => {
  const user = usersData.find((u) => u.id == req.params.id);
  if (!user) res.status(404).send("user not found");

  const { name, email } = req.body;
  user.name = name;
  user.email = email;
  res.json(user);
});

router.delete("/delete/:id", (req, res) => {
  const showData = usersData.filter((u) => u.id != req.params.id);
  res.json(showData);
});

module.exports = { router };
