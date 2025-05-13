const mongoose = require('mongoose');

const dbConnect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
    console.log('Mongodb Connected');
    }catch(err){
        console.error(err);
        process.exit(1);
    }
    
}


module.exports = dbConnect;