const express = require('express')
const commentsRepository = require('../../database/repository/comment.repository.js')
const userRepository = require('../../database/repository/user.repository.js')


const router = express.Router()

router.post('/', async (req, res) => {
  const { _id, postId, userId, text, date } = await commentsRepository.create({ ...req.body, date: new Date() })
  const [author] = await userRepository.getAllById([userId])
  res.send({
    _id,
    postId,
    text,
    date,
    author: {
      username: author.username
    }
  })
})

router.get('/:postId', async (req, res) => {
  const { postId } = req.params
  const comments = await commentsRepository.getByPostId(postId)
  res.send(comments)
})

router.put('/:commentId', async (req, res) => {
  const { commentId } = req.params
  const { n } = await commentsRepository.update(commentId, req.body)
  if (n) {
    res.send({ status: 'Success' })
  } else {
    res.status(500)
    res.send({
      error: `Can not update comment with id - ${ commentId }`
    })
  }
})

router.delete('/:commentId', async (req, res) => {
  const { commentId } = req.params
  const count = await commentsRepository.delete(commentId)
  if (count) {
    res.send({ status: 'Success' })
  } else {
    res.status(500)
    res.send({
      error: `Can not delete comment with id - ${ commentId }`
    })
  }
})

module.exports = router