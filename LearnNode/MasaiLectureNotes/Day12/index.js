const express = require("express");
const {connection}=require("./dbConfig");
const app = express();

app.use(express.json());
app.listen(8080,async()=>{
    // await connection;
    connectToDB()
    console.log("Server running on http://localhost:8080");
})