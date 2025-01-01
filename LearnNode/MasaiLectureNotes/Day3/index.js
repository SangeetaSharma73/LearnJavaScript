const fs = require('fs');

// if file exist then it will delete otherwise give an error
fs.unlinkSync('test.txt');

console.log('file deleted successfully');

fs.appendFileSync("test.txt", "test the test.txt file");

console.log("file written successfully");