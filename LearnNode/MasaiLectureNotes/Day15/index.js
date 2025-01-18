const express = require('express');
const UserModel = require('./models/user.model');
const {connectDB} = require("./db");

const app=express();

app.use(express.json())

app.post("/users",async(req,res)=>{
    // const {name,email,pass}
    try{
        const newUser = new UserModel(req.body)
        await newUser.save()
        res.json({msg:"New user has been added"})
    }catch(err){
        res.json({err})
    }
})

app.post("/auth",async(req,res)=>{
const {email,pass}=req.body;
try{
    const matchingUser = await UserModel.findOne({email})
    // console.log(matchingUser);
    // res.json({msg:"WIP"})
    if(matchingUser){
        bcrypt.compare(pass,matchingUser.pass,(err,result)=>{
            if(result){
                const token =jwt.sign({userId:matchingUser._id},"masai");

                 res.json({msg:"Login Successfull",token})
            }else{
                res.json({msg:"wrong credentials",err})
            }
        });
    }
}catch(err){
res.json({err})
}
});

app.get("/movies",(req,res)=>{
    const token =req.headers.authorization.split(" ")[1]
    if(token){
        jwt.verify(token,"masai",(err,decoded)=>{
            if(decoded){
                res.json({ msg: "Watching the movie" });
            }else{
                res.json({msg:"wrong path"})
            }
        }
        )
    }
})

app.listen(8080,()=>{
    connectDB()
    console.log("server is at http://localhost:8080");
})