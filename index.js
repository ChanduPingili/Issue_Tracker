const express = require('express');
require('dotenv').config();
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT;
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/jpmcproject").then(()=>{
    console.log("DB connected successfully");
}).catch((err)=>{
    console.log("error while connecting DB" , err)
})
const orgroute = require('./route/user.route')    
app.use('/org/' , orgroute);


app.listen(port , ()=>{
    console.log(`server running at ${port}`);
})