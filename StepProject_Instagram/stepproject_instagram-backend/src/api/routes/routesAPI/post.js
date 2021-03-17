const express = require('express')
const postRepository = require('../../database/repository/post.repository.js')

const router = express.Router()

router.post('/', async (req, res) => {
  const post = await postRepository.create({ ...req.body, date: new Date() })
  res.send(post)
})

router.get('/:userId', async (req, res) => {
  const { userId } = req.params
  const posts = await postRepository.getAllByAuthorId([userId])
  res.send(posts)
})

router.put('/:postId', async (req, res) => {
  const { postId } = req.params
  const { n } = await postRepository.update(postId, req.body)
  if (n) {
    res.send({ status: 'Success' })
  } else {
    res.status(500)
    res.send({
      error: `Can not update post with id - ${ postId }`
    })
  }
})

router.delete('/:postId', async (req, res) => {
  const { postId } = req.params
  const count = await postRepository.delete(postId)
  if (count) {
    res.send({ status: 'Success' })
  } else {
    res.status(500)
    res.send({
      error: `Can not delete post with id - ${ postId }`
    })
  }
})

module.exports = router