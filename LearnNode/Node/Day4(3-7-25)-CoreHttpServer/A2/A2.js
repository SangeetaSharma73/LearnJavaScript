const fs = require("fs");

const filePath = "bigfile.txt";
const stats = fs.statSync(filePath);
const totalSize = stats.size;

const readStream = fs.createReadStream(filePath);
let bytesRead = 0;
readStream.on("data", (chunk) => {
  bytesRead += chunk.length;
  const percent = ((bytesRead / totalSize) * 100).toFixed(2);
  console.log(`Progress: ${percent}%`);
});

readStream.on("end", () => {
  console.log("File reading finished");
});

// 7️⃣ Listen for any errors
readStream.on("error", (err) => {
  console.error("❌ Error reading file:", err);
});
