const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is the Home Page");
  } else if (req.url === "/about") {
    res.end("This is the about section");
  }
  else{
    res.end("this is not available");
  }
})

server.listen(8080,()=>{
    console.log("Server is running at http://localhost:8080");
});


// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.method === "GET" && req.url === "/") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("This is the Home Page");
//   } else if (req.method === "GET" && req.url === "/about") {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("This is the about section");
//   } else {
//     res.writeHead(404, { "Content-Type": "text/plain" });
//     res.end("This page is not available");
//   }
// });

// server.listen(8080, () => {
//   console.log("Server is running at http://localhost:8080");
// });
