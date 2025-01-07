const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("This is the home page");
  } else if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>this is the about section </h1>");
  } else if (req.url === "/data") {
    let data = fs.readFileSync("./data.json", "utf-8");
    res.end(data);
  } else if (req.url === "/add-data" && req.method === "POST") {
    let str=""
    req.on("data",(chunk)=>{
        str+=chunk;
    })
    req.on("end",()=>{
        console.log(str);
    })
    // console.log(req.body);
    res.end("The data has been added to the DB");
  } else {
    res.end("404");
  }
});

server.listen(8080, () => {
  console.log("Server is running at http://localhost:8080");
});
