const decodeJwtToken = require('./decodeJwtToken.js')

module.exports = () => {
  return (req, res, next) => {
    const { authorization } = req.headers
    if (authorization) {
      try {
        req.principal = decodeJwtToken(authorization)
      } catch (e) {
        res.send({
          status: 'error',
          message: e.message
        })
      }
    }
    next()
  }
}