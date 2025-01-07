const express= require('express');
const app= express();
const fs = require('fs');
app.use(express.json());
// console.log(app);



app.get('/',(req,res)=>{
    //logic
    res.end("this is the home page and i have installed nodemon to run the server");
})


app.get("/students",(req,res)=>{
    fs.readFile("./db.json","utf-8",(err,data)=>{
        if(err){
            res.send({err});
        }
        else{
            let parseData= JSON.parse(data);
            res.send({students:parseData.students});
        }
    })
});

app.get("/teachers", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.send({ err });
    } else {
      let parseData = JSON.parse(data);
      res.send({ teachers: parseData.teachers });
    }
  });
});


app.post("/teachers", (req, res) => {
  let data = fs.readFileSync("./db.json","utf-8");
  let parseData = JSON.parse(data);
  parseData.teachers.push(req.body);
  fs.writeFileSync("./db.json",JSON.stringify(parseData))
  res.send("The new teacher data has been added")
});

// app.post((req, res) => {
//   //logic
// });
// app.get((req, res) => {
//   //logic
  
// });
app.listen(8080,()=>{
    console.log("Server is running at http://localhost:8080");
})
