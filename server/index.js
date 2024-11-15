require('dotenv').config();
const express = require('express');
const database = require('./config/database');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
const port = process.env.PORT;

database();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})