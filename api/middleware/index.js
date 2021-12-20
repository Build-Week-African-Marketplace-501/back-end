const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../config')

const restricted = (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return next({ status: 401, message: 'token required' })
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return next({ status: 401, message: 'token invalid' })
    }

    req.decodedJwt = decoded
    next()
  })
}

// eslint-disable-next-line
const errorHandling = (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  })
}

module.exports = {
  restricted,
  errorHandling,
}
