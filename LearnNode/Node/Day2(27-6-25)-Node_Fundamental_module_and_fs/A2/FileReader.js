const fs = require("fs");
const readline = require("readline");

// Create a readable stream from the file
const fileStream = fs.createReadStream("./read.txt", "utf-8");

// Create readline interface using the file stream as input
const rl = readline.createInterface({
  input: fileStream,
  output: process.stdout, // Optional: allows you to write output to console if needed
});

rl.on("line", (line) => {
  // Output each line from the file
  console.log("Read line:", line);
});

rl.on("close", () => {
  console.log("Finished reading the file.");
});
