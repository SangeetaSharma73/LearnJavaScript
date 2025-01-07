/*
reading 
creating
deleting 
appending
rename
list

*/

const fs= require('fs');

//1. create a file
//if file is already present, then it will override the content
// if not present, then it will create the file
//Can not create file in a specified path using the cwd as base dir
fs.writeFileSync("test.txt","test book");

//this will append data to the existing file, else it will create then append
fs.appendFileSync("test_dummy.txt","Test 1\n");
fs.appendFileSync("test.txt","Test 2");

//read 

//first file should be exist otherwise it will get an error.
let content = fs.readFileSync("test.txt","utf-8");
let test_dummy = fs.readFileSync("test_dummy.txt", "utf-8");

console.log(content);
console.log(test_dummy);

ans= fs.renameSync("test.txt","test_rename.txt");

console.log(ans);

console.log(fs.readdirSync("./"));

console.log(fs.rmSync("test_dummy.txt"));





