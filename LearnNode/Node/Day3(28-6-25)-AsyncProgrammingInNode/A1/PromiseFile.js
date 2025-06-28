const fs = require("fs").promises;

fs.readFile("./File.txt", "utf-8")
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
