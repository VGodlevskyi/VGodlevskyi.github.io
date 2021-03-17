const FilesModel = require('../models/files.model')

module.exports = {
  getOneById: async (_id) => {
    return await FilesModel.findOne({ _id })
      .exec()
  },
  create: async (data) => {
    return FilesModel.create(data)
  },
  update: async (query, data) => {
    return await FilesModel.updateOne(query, data)
  },
  isExists: async (query) => {
    return await FilesModel.exists(query)
  }
}