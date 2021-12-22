const Model = require('../global-model')

const getUser = (req, res, next) => {
  const { username } = req.body

  Model.getBy('users', { username: username })
    .then((user) => {
      req.user = user
      next()
    })
    .catch(next)
}

const usernameIsUnique = (req, res, next) => {
  if (req.user) return next({ status: 404, message: 'username must be unique' })
  req.user = req.body
  next()
}

const userExists = (req, res, next) => {
  if (req.user) return next()
  next({ status: 404, message: 'user not found' })
}

const registerUser = (req, res, next) => {
  Model.add('users', req.user)
    .then((user) => {
      req.user = user
      next()
    })
    .catch(next)
}

module.exports = {
  getUser,
  usernameIsUnique,
  userExists,
  registerUser,
}
