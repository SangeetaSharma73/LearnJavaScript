const express = require('express');
const crypto = require('crypto');

app = express();

// app.use(json);

app.get("/",(req,res)=>{
    return "Welcome";
})
// console.log(crypto.Hash());

// salting/Masking
// Encryption/Decryption
// Hashing

// Server.listen(3000,(req,res)=>{
//     console.log("Server i")
// })

console.time("time check")

let ans=0 
for(let i=0;i<101;i++)
{
    ans+=i
}
console.log(ans)
console.timeEnd("time check");

