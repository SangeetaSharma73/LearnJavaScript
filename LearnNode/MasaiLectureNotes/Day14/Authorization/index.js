const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const { connectDB } = require("./db");
const {UserModel} = require("./models/user.model");
const app = express();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
app.use(express.json());

app.post("/users", async (req, res) => {
  const {name,age,email,pass}=req.body;
  try {
    bcrypt.hash(pass,5, async (err,hash)=>{
        const newUser = new UserModel({name,age,email,pass:hash});
        await newUser.save();
    })
    // const newUser = new UserModel(req.body);
    // // console.log(newUser);
    // await newUser.save();
    res.send("new user added in the db");
  } 
  catch (err) {
    res.send(err);
}
});

app.post("/auth", async (req, res) => {
  const { email, pass } = req.body;
  try {
    // const matchingUser = await UserModel.findOne({ email,pass});
     const matchingUser = await UserModel.findOne({ email});
    if (matchingUser) {
        bcrypt.compare(pass,matchingUser.pass,(err,result)=>{
        if(result){
            const token = jwt.sign({ course: "cap" }, "masai",{expiresIn:30});

            res.send({"msg":"Login Successful",token});
        }else{
            console.log(err);
        }
        })
    //   res.send({
    //       "msg": "Login Successful",
    //       token: jwt.sign({ course: "cap" }, "masai",{expiresIn:30})});
    }else{
        res.status(404).send("Wrong Credential");
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/movies",  (req, res) => {
    const token = req.headers.authorization;
//   const { token } = req.query;
  //    res.status(200).send("watching movies");
  if (token) {
    jwt.verify(token,"masai",(err,decoded)=>{
        if(decoded){
            console.log(decoded);
            res.send("watch movies");
        }else{
            res.send(err);
        }
    });

    // res.status(200).send("watching movies");
  } else {
    res.status(500).send("you are not authorized");
  }
});

app.get("/series", async (req, res) => {
  //   res.status(200).send("watching series");
});

app.listen(PORT, () => {
  connectDB();
  console.log(`server is running at http://localhost:${PORT}`);
});
