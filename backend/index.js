const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/jpmcproject')
.then(()=>{
    console.log('Connected to MongoDB')
}).catch((err)=>{
    console.log(err)
})
app.use(express.json())
app.use('/' , require('./routes/authRoute'))

const port = 2000;
app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})