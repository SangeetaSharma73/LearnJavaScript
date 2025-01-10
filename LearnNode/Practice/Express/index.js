const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is my first url");
  } else if (req.method === "GET" && req.url === "/test") {
    // res.end("<h1>this is the heading </h1>");
    res.write("<h1>this is the heading </h1>");
    res.end("<h1>this is the heading </h1>");
  }else if(req.method==="POST" && req.url==="/data"){
    // console.log(req.body);
    let body=""
    req.on('data',(chunk)=>{
        body+=chunk.toString();
        console.log("1",body);
    });
    console.log("2.",body);
    res.end('this is done');
  }
});

server.listen(3030, () => {
  console.log("Server is running on http://localhost:3030");
});
