const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let carSchema = new Schema({
  BrandName: {
    type: String
  },
  ModelName: {
    type: String
  },
  year: {
    type: Number
  },
  mileage:{
    type: Number
  },
  condition:{
    type: String
  },
  base64:{
    type: String
  },
  price:{
    type: Number
  },
  description:{
    type: String
  },
  owner:{
    type: String
  }
}, {
    collection: 'Carlist'
  })
  
module.exports = mongoose.model('Car', carSchema)