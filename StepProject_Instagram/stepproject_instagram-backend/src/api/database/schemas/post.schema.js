const mongoose = require('mongoose')

module.exports = mongoose.Schema({
  _id: String,
  authorId: String,
  url: String,
  date: Date
})