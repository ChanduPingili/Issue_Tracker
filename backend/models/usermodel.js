const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique:true
    },
    userEmail:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    userPassword:{
        type:String,
        required:true
    }
})

const usermodel = mongoose.model('user' , userSchema);

module.exports = usermodel;