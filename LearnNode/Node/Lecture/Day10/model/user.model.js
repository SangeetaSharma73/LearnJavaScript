const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
  username:{type:String,required:true,unique:true},
  email: { type: String, required: true, match: /.+\@.+\..+/, unique: true },
//   password: { type: String, required: true },
//   isMarried: { type: Boolean, required: true },
  age: { type: Number, min: 18, max: 65 },
  role: { type: String, enum: ["admin", "customer"], default: "customer" },
  
  pass:{type:String, required:true,validate:{
    validator:(value)=>{
        //logic
        return value.length >= 8
    },
    message:"Password should be of atleast 8 characters",
  }}
});

const UserModel = mongoose.model("User", userSchema);

module.exports = { UserModel };

//string , number , date, array , object
