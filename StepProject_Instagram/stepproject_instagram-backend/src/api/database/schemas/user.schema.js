const mongoose = require('mongoose')

module.exports = mongoose.Schema({
  _id: String,
  username: String,
  password: String,
  email: String,
  img: String,
  phone: String,
  name: String
})