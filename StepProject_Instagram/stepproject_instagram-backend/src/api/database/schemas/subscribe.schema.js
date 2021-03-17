const mongoose = require('mongoose')

module.exports = mongoose.Schema({
  followerId: String,
  subscribeId: String
})