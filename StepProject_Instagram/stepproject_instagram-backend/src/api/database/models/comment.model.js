const mongoose = require('mongoose')
const commentSchema = require('../schemas/comment.schema.js')

module.exports = mongoose.model('comments', commentSchema)