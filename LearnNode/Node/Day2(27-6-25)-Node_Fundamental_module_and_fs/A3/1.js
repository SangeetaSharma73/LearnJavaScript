const fs = require("fs");
const os = require("os");

//reading a file
fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

const data = fs.readFileSync("./file.txt", "utf-8");

console.log(data);

//2. writing a file
fs.writeFile("./file.txt", "now it is changing", (err) => {
  if (err) {
    console.log(err);
  }
});

// //3. append file
fs.appendFile("./file.txt", "message", (err) => {
  if (err) {
    console.log(err);
  }
});
