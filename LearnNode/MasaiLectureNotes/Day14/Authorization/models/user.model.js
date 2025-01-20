const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    pass:String
},{
    versionKey:false
})

const UserModel = mongoose.model("user",UserSchema);

module.exports = {UserModel};