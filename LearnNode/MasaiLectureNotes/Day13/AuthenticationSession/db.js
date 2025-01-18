const mongoose = require('mongoose');

const connectDB=async()=>{
    try{
        await mongoose.connect(
          "mongodb+srv://sangeeta:sangeeta123@cluster0.jiawa.mongodb.net/authCap?retryWrites=true&w=majority&appName=Cluster0"
        );
    console.log("Atlas db connected");
    }catch(err){
        console.log(err);
    }
    
};


module.exports = {connectDB};