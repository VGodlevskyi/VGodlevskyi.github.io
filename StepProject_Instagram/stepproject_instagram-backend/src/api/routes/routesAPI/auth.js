const express = require('express')
const userRepository = require('../../database/repository/user.repository.js')
const generateJwtToken = require('../../../config/jwtToken/generateJwtToken.js')
const router = express.Router()

router.post('/signup', async (req, res) => {
  const { username, password } = req.body
  if (!username || !password) {
    res.send({
      status: 'error',
      message: "Username or password is empty"
    })
  } else {
    const existedUser = await userRepository.getByUsername(username)
    if (!existedUser) {
      const user = await userRepository.create(req.body)
      const token = generateJwtToken(user)
      res.send({ token })
    } else {
      res.send({
        status: 'error',
        message: `Username '${ username }' existed`
      })
    }
  }
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  if (!username) {
    res.send({
      status: 'error',
      message: "Username is empty"
    })
  } else {
    const user = await userRepository.getByUsername(username)
    if (!user || user.password !== password) {
      res.send({
        status: 'error',
        message: "Username or password is wrong"
      })
    } else {
      const token = generateJwtToken(user)
      res.send({ token })
    }
  }
})

module.exports = router