const express = require("express");
const { connectDB } = require("./db");
const { UserModel } = require("./models/user.model");

const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  try {
    const newUser = new UserModel(req.body);
    await newUser.save();
    res.send("User has been added to DB");
  } catch (err) {
    console.log(err);
  }
});

app.post("/auth", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const matchingUser = await UserModel.findOne({ email, pass });
    //   console.log(matchingUser);

    if (matchingUser) {
      res.status(200).send({ msg: "Login Successful", token: "mov-ser-acc" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/movies", async (req, res) => {
  const {token} = req.query;
  //    res.status(200).send("watching movies");
  if (token==="mov-ser-acc") {
    res.status(200).send("watching movies");
  } else {
    res.status(500).send("you are not authorized");
  }
});

app.get("/series", async (req, res) => {
  //   res.status(200).send("watching series");
});

app.listen(8080, () => {
  connectDB();
  console.log("server is running at http://localhost:8080");
});
