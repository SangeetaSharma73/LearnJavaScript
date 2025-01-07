const isEven=require("is-even");

console.log(isEven(12));

//create and write into a file and on a file

// crud - create,read,update,delete

const fs = require('fs');

try{
    fs.writeFileSync(
      "./test.txt",
      "this is the test file to check the async writeFile function"
    );
}catch(err){
     console.log(err);
}


console.log("file created successfully");

try{
    const data = fs.readFileSync("./test.txt", "utf-8");
    console.log(data);
}catch(error){
    console.log(error);
}

fs.readFile("./test.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})



// Homework 

//1. How to append/update into a file 
//2. how to delete from a file and a file.
//3. what is Streaming?

