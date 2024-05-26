const mongoose = require('mongoose');
const developerSchema = mongoose.Schema({
    empId:{
        type:String,
        required:true
    },
    empName:{
        type:String,
        required:true
    },
    empEmail:{
        type:String,
        required:true
    },
    empPassword:{
        type:String,
        required:true
    },
    empPhn:{
        type:String,
        required:true
    },
    empServiceId:{
        type:String,
        required:true
    }
})

const developersignup = mongoose.model('developersignup' , developerSchema);

module.exports = developersignup