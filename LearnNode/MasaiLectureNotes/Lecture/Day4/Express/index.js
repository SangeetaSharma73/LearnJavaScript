// const express = require("express");
// const fs = require("fs");

// const app = express();

// app.get("/", (req, res) => {
//     // Logic for the home route
//     res.send("This is the home page served from express, and I have installed nodemon as well.");
// });

// // API to get student details from db.json
// app.get("/students", (req, res) => {
//     fs.readFile("./db.json", "utf-8", (err, data) => {
//         if (err) {
//             res.status(500).send({ msg: "Error reading the file", err });
//         } else {
//             try {
//                 // Parse JSON data from the file
//                 const students = JSON.parse(data);
//                 res.status(200).json({ students });
//             } catch (parseError) {
//                 res.status(500).send({ msg: "Error parsing JSON data", parseError });
//             }
//         }
//     });
// });

// // Start the server
// app.listen(3000, () => {
//     console.log("Server is running on http://localhost:3000");
// });


const express = require("express");
const fs = require("fs");

const app = express();
// app.use(express.json());

app.get("/", (req, res) => {
  // Logic for the home route
  res.send(
    "This is the home page served from express, and I have installed nodemon as well."
  );
});

// API to get student details from db.json
app.get("/students", (req, res) => {
  fs.readFile("./db.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).send({ msg: "Error reading the file", err });
    } else {
      try {
        // Parse JSON data from the file
        const students = JSON.parse(data);
        res.status(200).json({ students:students.teachers});
      } catch (parseError) {
        res.status(500).send({ msg: "Error parsing JSON data", parseError });
      }
    }
  });
});


app.post("/teachers",(req,res)=>{
    let data=fs.readFileSync("./db.json","utf-8");
    let parseData = res.JSON.parse(data);
    parseData.teachers.push(req.body);
})

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
