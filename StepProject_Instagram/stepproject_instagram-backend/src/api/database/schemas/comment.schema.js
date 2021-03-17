const mongoose = require('mongoose')

module.exports = mongoose.Schema({
  _id: String,
  postId: String,
  userId: String,
  text: String,
  date: Date
})