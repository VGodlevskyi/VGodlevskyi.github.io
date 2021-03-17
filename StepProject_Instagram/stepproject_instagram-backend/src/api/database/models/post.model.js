const mongoose = require('mongoose')
const postSchema = require('../schemas/post.schema.js')

module.exports = mongoose.model('posts', postSchema)