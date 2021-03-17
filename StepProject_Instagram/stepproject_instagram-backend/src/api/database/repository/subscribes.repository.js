const SubscribeModel = require('../models/subscribe.model.js')

module.exports = {
  getSubscribes: async (userId) => {
    return await SubscribeModel.find({ followerId: userId }).exec()
  },
  getFollowers: async (userId) => {
    return await SubscribeModel.find({ subscribeId: userId }).exec()
  },
  create: async (followerId, subscribeId) => {
    return await SubscribeModel.create({ followerId, subscribeId })
  },
  delete: async (followerId, subscribeId) => {
    return await SubscribeModel.remove({ followerId, subscribeId })
  }
}