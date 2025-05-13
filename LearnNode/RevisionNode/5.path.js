const path = require("path");

const filePath = path.join(__dirname, "folder", "file.txt");
console.log("Full path:", filePath);
console.log("Extension:", path.extname(filePath));
