const http = require("http");
const fs = require("fs");
const path = require("path");

// Directory to serve files from
const baseDir = path.join(__dirname, "files");

const server = http.createServer((req, res) => {
  const filePath = path.join(baseDir, req.url);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
      return;
    }

    // Serve the file
    fs.createReadStream(filePath).pipe(res);
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`📂 File server running at http://localhost:${PORT}/hello.txt`);
});
