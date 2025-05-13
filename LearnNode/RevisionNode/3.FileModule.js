const fs = require("fs");

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) return console.log(err);
  console.log(data);
});

fs.writeFile("newfile.txt", "Hello from Node!", (err) => {
  if (err) return console.log(err);
  console.log("File written successfully");
});
