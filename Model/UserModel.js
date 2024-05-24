const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userId: { type: String, unique: true },
    userName: { type: String, required: true,unique:true},
    userPassword: { type: String, required: true},
    userEmail: { type: String, required: true },
    userIssueIds:[{ type: String }] 
   
});

const User = mongoose.model('User', userSchema);

module.exports = User;
