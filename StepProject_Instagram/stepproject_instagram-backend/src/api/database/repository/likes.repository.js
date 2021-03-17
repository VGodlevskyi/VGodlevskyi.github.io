const LikesModel = require('../models/likes.model.js')

module.exports = {
  create: async ({ postId, userId }) => {
    return await LikesModel.create({ postId, userId })
  },
  delete: async ({ postId, userId }) => {
    return await LikesModel.remove({ postId, userId })
  }
}