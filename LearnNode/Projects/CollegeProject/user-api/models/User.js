const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password : {true:String , required:true},
    role:{type:String,enum:["admin","student","instructor"],required:true},
},
{
    timestamps:true
},
{version:false});

//Hash password before saving

UserSchema.pre("save",async function (next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password,10);
    next();
});


//Password verification method

UserSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

module.exports = mongoose.model("User",UserSchema);