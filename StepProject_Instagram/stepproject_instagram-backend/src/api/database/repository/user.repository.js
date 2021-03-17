const UserModel = require('../models/user.model.js')
const uuid = require('uuid')

module.exports = {
  getAllById: async (ids) => {
    return await UserModel.aggregate()
      .match({ _id: { $in: ids } })
      .project({ password: 0 })
      .exec()
  },
  getByUsername: async (username) => {
    return await UserModel.findOne({ username }).exec()
  },
  create: async (user) => {
    return UserModel.create({ ...user, _id: uuid.v4() })
  },
  updateById: async (_id, data) => {
    return await UserModel.updateOne({ _id }, data).exec()
  },
  delete: async (_id) => {
    return await UserModel.remove({ _id })
  },
  getRecommends: async (userId, userSubscribes) => {
    return UserModel.aggregate()
      .match({ _id: { $nin: userSubscribes } })
      .match({ _id: { $ne: userId } })
      .limit(4)
      .project({ username: 1, name: 1, img: 1 })
  },
  getProfile: async (userId) => {
    return await UserModel.findOne({ _id: userId }).exec()
  },
}