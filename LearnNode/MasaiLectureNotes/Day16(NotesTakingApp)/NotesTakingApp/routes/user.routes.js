const express = require("express");
require("dotenv").config();
const { UserModel } = require("../models/user.model");
const userRouter = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

userRouter.post("/", async (req, res) => {
  const { name, email, pass } = req.body;
  try {
    bcrypt.hash(pass, Number(process.env.SALT_ROUNDS), async (err, hash) => {
      if (err) {
        res.json({ err });
      } else {
        const newUser = new UserModel({ name, email, pass: hash });
        await newUser.save();
        res.json({ msg: "register" });
      }
    });
    // const newUser = new UserModel(req.body);
    // await newUser.save();
    // res.json({msg:"new user added/ You have successfully registered"});
  } catch (err) {
    res.json({ err });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, pass } = req.body;
  try {
    const matchingUser = await UserModel.findOne({ email });
    if (matchingUser) {
      const isPasswordMatching = await bcrypt.compare(pass, matchingUser.pass);

      if(isPasswordMatching){

        const token = jwt.sign({userId:match
        ._id},user.matchingUser,process.env.SECRET_KEY);

        res.status(200).json({msg:"login successful",token});
      }else{
        res.status(400).json({msg:"Invalid Password"});
      }
    }
    else{
        res.send({msg:"user not found"});
    }
    // bcrypt.compare(pass,matchingUser.pass,function(err,result){

    // if(result){
    //     const token = jwt.sign({userId:matchingUser._id},process.env.SECRET_KEY)
    //     res.status(200).json({ msg: "login", token });

    // }else{
    //       res.json({ err });
    // }

    // })
  } catch (err) {
    res.json({ err });
  }
});

module.exports = { userRouter };
