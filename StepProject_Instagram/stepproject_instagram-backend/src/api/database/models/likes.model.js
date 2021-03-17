const mongoose = require('mongoose')
const likesSchema = require('../schemas/likes.schema.js')

module.exports = mongoose.model('likes', likesSchema)