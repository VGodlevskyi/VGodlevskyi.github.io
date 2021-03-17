const mongoose = require('mongoose')

module.exports = mongoose.Schema({
  _id: String,
  data: Buffer
})