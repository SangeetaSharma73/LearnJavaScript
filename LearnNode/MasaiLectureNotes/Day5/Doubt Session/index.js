const express = require('express');
const fs = require('fs');
const {validation_middleware}=require('./validationMiddleware');
const app = express();
app.use(express.json());


/*
{
"ID":"number",
"Name":"string",
"Rating":"number",
"Description":"string",
"Genre":"string",
"Cast":"array of string"
}
*/
app.post('/',validation_middleware,(req,res)=>{
res.status(200).json({message:"data"});
});


app.listen('3030',()=>{
    console.log(`server running on http://localhost:3030`);
})