const mongoose = require('mongoose')
const filesSchema = require('../schemas/files.schema.js')

module.exports = mongoose.model('files', filesSchema)