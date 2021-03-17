const jwt = require('jsonwebtoken')
const { __TOKEN_SIGNATURE } = require('../index')

module.exports = ({ username }) => jwt.sign({ username }, __TOKEN_SIGNATURE)