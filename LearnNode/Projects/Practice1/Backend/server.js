const express = require('express');
const server = express();
require('dotenv').config();
const connectDB = require('./config/db');
const cors=require('cors');
// const userRoutes = require('./routes/userRoutes');
const PORT = process.env.PORT || 5000;

server.use(cors());
server.use(express.json());

// server.use('/api/users',userRoutes);
connectDB();

server.listen(PORT,()=>{
    console.log(`Server running on port http://localhost:${PORT}`);
});

