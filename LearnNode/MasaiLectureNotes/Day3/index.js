const fs = require('fs');

// if file exist then it will delete otherwise give an error
fs.unlinkSync('test.txt');

console.log('file deleted successfully');

fs.appendFileSync("test.txt", "test the test.txt file");

console.log("file written successfully");

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is the home page");
  }
  else if(req.url==='/about'){
    res.end("this is the about section ");
  }else if(req.url==='/data'){
    let data = fs.readFileSync("./data.json","utf-8");
    res.end(data);
  }
  
  else{
    res.end("404:not found");
  }
});

server.listen(3030,()=>{
    console.log("server is running at http://localhost:3030");
})