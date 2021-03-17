const PostModel = require('../models/post.model.js')
const uuid = require('uuid')

module.exports = {
  getAllByAuthorId: async (authorIds) => {
    return await PostModel.aggregate()
      .sort({ date: -1 })
      .lookup({
        from: 'users',
        let: { 'author_id': '$authorId' },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ['$_id', '$$author_id']
              }
            }
          },
          {
            $project: { name: 1, username: 1, img: 1 }
          }
        ],
        as: 'author'
      })
      .unwind('author')
      .lookup({
        from: 'likes',
        let: { 'post_id': '$_id' },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ['$postId', '$$post_id']
              }
            }
          },
        ],
        as: 'likes'
      })
      .lookup({
        from: 'comments',
        let: { 'post_id': '$_id' },
        pipeline: [
          {
            $match: {
              $expr: {
                $eq: ['$postId', '$$post_id']
              }
            }
          },
          {
            $sort: { date: -1 }
          },
          {
            $lookup: {
              from: 'users',
              let: { 'user_id': '$userId' },
              pipeline: [
                {
                  $match: {
                    $expr: {
                      $eq: ['$_id', '$$user_id']
                    }
                  }
                },
                {
                  $project: { username: 1 }
                }
              ],
              as: 'author'
            }
          },
          {
            $unwind: '$author'
          },
          {
            $project: { userId: 0 }
          }
        ],
        as: 'comments'
      })
      .match({ authorId: { $in: authorIds } })
      .exec()
  },
  getByUserId: async (authorId) => {
    return await PostModel.find({ authorId }).exec()
  },
  create: async (post) => {
    return PostModel.create({ ...post, _id: uuid.v4() })
  },
  update: async (_id, post) => {
    return await PostModel.update({ _id }, post)
  },
  delete: async (_id) => {
    return await PostModel.remove({ _id })
  }
}