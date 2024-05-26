const mongoose = require('mongoose');
const orgSchema = mongoose.Schema({
    orgId: {
        type: String,
        required: true,
        unique: true
      },
      orgName: {
        type: String,
        required: true
      },
      orgEmail: {
        type: String,
        required: true,
        unique: true
      },
      orgPassword: {
        type: String,
        required: true
      },
      serviceIds: {
        type:[String]
      }  
})
const signupmodel =  mongoose.model("orgsignup" , orgSchema);

module.exports = signupmodel;