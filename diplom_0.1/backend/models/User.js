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
  password:{
    type: String
  }
}, {
    collection: 'Userlist'
  })
  
module.exports = mongoose.model('User', userSchema)