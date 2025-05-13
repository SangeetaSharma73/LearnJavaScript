const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    name:{type:String},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    role:{type:String,enum:["admin","student","instructor"],
    required:true}
},{
    timestamps:true
},
{
    version:false
});

UserSchema.pre('save',async function (next){
    if(!this.isModified('password')) return next();
    // this.password
})