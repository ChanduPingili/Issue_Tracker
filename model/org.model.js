const mongoose = require('mongoose');

const orgSchema = new mongoose.Schema({
  orgid: {
    type: String,
    required: true,
    unique: true
  },
  orgemail: {
    type: String,
    required: true,
    unique: true
  },
  serviceids: {
    type: [String],
    required: true
  },
  orgpassword: {
    type: String,
    required: true
  },
  orgname: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('org', orgSchema);