const express = require('express')
const likeRepository = require('../../database/repository/likes.repository.js')

const router = express.Router()

router.post('/', async (req, res) => {
  const like = await likeRepository.create(req.body)
  res.send(like)
})

router.delete('/', async (req, res) => {
  const { postId, userId } = req.body
  const { deletedCount } = await likeRepository.delete({ postId, userId })
  if (deletedCount) {
    res.send({ postId, userId })
  } else {
    res.send({ status: 'error' })
  }
})


module.exports = router