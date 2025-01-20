const mongoose = require('mongoose');


const connectDB = async()=>{
    try{
        await mongoose.connect(
          "mongodb+srv://sangeeta:sangeeta123@cluster0.0mx4x.mongodb.net/auth2?retryWrites=true&w=majority&appName=Cluster0"
        );
        console.log("atlas db connected");
    }catch(err){
        console.log(err);
    }
    
}

module.exports = { connectDB };