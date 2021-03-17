const express = require('express')
const userRepository = require('../../database/repository/user.repository.js')
const postRepository = require('../../database/repository/post.repository.js')
const subscribesRepository = require('../../database/repository/subscribes.repository.js')

const router = express.Router()

router.post('/', async (req, res) => {
  const user = await userRepository.create(req.body)
  res.send(user)
})

router.get('/', async (req, res) => {
  const { username } = req.principal
  const { _doc: user } = await userRepository.getByUsername(username)
  res.send(user)
})

router.get('/:userId', async (req, res) => {
  const { userId } = req.params
  const { _doc: profile } = await userRepository.getProfile(userId)
  const posts = await postRepository.getByUserId(profile._id)
  const subscribes = await subscribesRepository.getSubscribes(profile._id)
  const followers = await subscribesRepository.getFollowers(profile._id)
  res.send({
    ...profile,
    stats: {
      posts: posts.length,
      subscribes: subscribes.length,
      followers: followers.length
    }
  })
})

router.put('/:userId', async (req, res) => {
  const { userId } = req.params
  const data = req.body
  const { n } = await userRepository.updateById(userId, data)
  console.log('updated', n)
  console.log('userId', userId)
  if (n) {
    res.send(data)
  } else {
    res.send({ status: 'error', message: `Can not update ${ data }` })
  }
})

router.get('/:userId/feed', async (req, res) => {
  const { userId } = req.params
  const subscribes = await subscribesRepository.getSubscribes(userId)
  const posts = await postRepository.getAllByAuthorId(subscribes.map(s => s.subscribeId))
  res.send(posts)
})

router.get('/:userId/recommends', async (req, res) => {
  const { userId } = req.params
  const subscribes = await subscribesRepository.getSubscribes(userId)
  const users = await userRepository.getRecommends(userId, subscribes.map(s => s.subscribeId))
  res.send(users)
})

router.get('/:userId/subscribes', async (req, res) => {
  const { userId } = req.params
  const subscribes = await subscribesRepository.getSubscribes(userId)
  const users = await userRepository.getAllById(subscribes.map(s => s.subscribeId))
  res.send(users)
})

router.post('/:userId/subscribes', async (req, res) => {
  const { userId } = req.params
  const { subscribeId } = req.body
  const subscribe = await subscribesRepository.create(userId, subscribeId)
  res.send(subscribe)
})

router.delete('/:userId/subscribes', async (req, res) => {
  const { userId } = req.params
  const { subscribeId } = req.body
  const { deletedCount } = await subscribesRepository.delete(userId, subscribeId)
  if (deletedCount) {
    res.send({ status: 'success' })
  } else {
    res.send({ status: 'error' })
  }
})

module.exports = router