const express = require('express')
const multer = require('multer');
const uuid = require('uuid')
const fileRepository = require('../../database/repository/files.repository.js')

const upload = multer()

const router = express.Router()

router.get('/:id', async (req, res) => {
  const { id } = req.params
  const image = await fileRepository.getOneById(id)
  res.send(image.data)
})

router.post('/', upload.single('file'), async (req, res) => {
  const { file } = req
  const _id = uuid.v4()
  const doc = await fileRepository.create({ _id, data: file.buffer })
  if (doc._id) {
    res.send({ url: `/api/files/${ _id }` })
  } else {
    res.send({ status: 'error', message: 'Can not upload file.' })
  }
})

module.exports = router