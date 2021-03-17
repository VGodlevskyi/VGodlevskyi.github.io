const jwt = require('jsonwebtoken')
const { __TOKEN_SIGNATURE } = require('../index')

module.exports = (token) => jwt.verify(token, __TOKEN_SIGNATURE)