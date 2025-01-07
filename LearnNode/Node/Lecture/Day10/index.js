const express = require('express');
// const nodemon = require('nodemon');
const mongoose = require('mongoose');
const {UserModel}= require("./model/user.model");
const app = express();
app.use(express.json());

app.get("/test",async(req,res)=>{
    await res.status(200).find();
});


app.post("/test", async(req, res) => {
  const newUser= new UserModel(req.body);
  await newUser.save();
  res.status(200).send('this is test');
});


app.listen(8080,async()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/MongooseDB");
        console.log('connected to db');
        console.log('The server is running at http://localhost:8080');
    }
    catch(err){
        console.log(err);
    }
})