const fs = require("fs");

// fs.readFile("./File.txt", "utf-8", async (err, data) => {
//   try {
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// });

async function readFileAsync() {
  try {
    const data = await fs.readFile("./read.txt", "utf-8");
    console.log("File contents:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
}

readFileAsync();
