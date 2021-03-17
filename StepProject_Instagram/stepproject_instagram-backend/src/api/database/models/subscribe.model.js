const mongoose = require('mongoose')
const subscribeSchema = require('../schemas/subscribe.schema.js')

module.exports = mongoose.model('subscribes', subscribeSchema)