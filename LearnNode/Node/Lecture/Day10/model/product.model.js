const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price:{type:Number,required:true},
  avail:{type:Boolean,default:true},
  stock:{type:Number,default:1}
});