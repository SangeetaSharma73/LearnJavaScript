const http= require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

if (req.url === "/") {
  res.writeHead(200);
  res.end("welcome to home page");
} else if (req.url === "/aboutus") {
  res.writeHead(200);
  res.end("<h3>this is the about us page</h3>");
} else if (req.url === "/contactus") {
  res.writeHead(200);
  res.end(`<a href="www.google.com" target="_blank"</a>`);
} else if (req.url === "/index") {
  fs.readFile("test.js", "utf-8", (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Error reading test.js file");
    } else {
      res.writeHead(200);
      res.end(data);
    }
  });
} else {
  res.writeHead(404);
  res.end("404 Not Found");
}

})


server.listen(8080,()=>{
    console.log("server is running on http://localhost:8080");
})