const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String
  },
  role:{
    type: String
  },
  phone:{
    type: Number
  },
  password:{
    type: String
  },
  isAuthenticated: { type: Boolean, default: false },
}, {
    collection: 'Userlist'
  })
  
module.exports = mongoose.model('User', userSchema)