const fs = require("fs");
const http = require("http");

// Create an HTTP server
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    // Home page
    res.end("This is the home page");
  } else if (req.url === "/about") {
    // About page
    res.end("This is the about page");
  } else if (req.url === "/data") {
    // Reading and sending JSON data
    try {
      let data = fs.readFileSync("./data.json", "utf-8");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error reading data file");
    }
  } else if (req.method === "POST" && req.url === "/add-data") {
    // Handling POST request
    let str = "";

    req.on("data", (chunk) => {
      str += chunk;
    });

    req.on("end", () => {
      console.log(str); // Log the received data
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Data received successfully");
    });
  } else {
    // Handling unknown routes
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404: Not Found");
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
