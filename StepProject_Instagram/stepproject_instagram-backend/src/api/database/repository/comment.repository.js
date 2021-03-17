const CommentModel = require('../models/comment.model.js')
const uuid = require('uuid')

module.exports = {
  getByPostId: async (postId) => {
    return await CommentModel.find({ postId }).exec()
  },
  create: async (comment) => {
    return CommentModel.create({ ...comment, _id: uuid.v4() })
  },
  update: async (_id, comment) => {
    return await CommentModel.update({ _id }, comment)
  },
  delete: async (_id) => {
    return await CommentModel.remove({ _id })
  }
}