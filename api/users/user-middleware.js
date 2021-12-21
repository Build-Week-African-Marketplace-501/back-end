// const Users = require('./user-model.js')

const usernameIsUnique = (req, res, next) => next()

const userIdExists = (req, res, next) => next()

module.exports = {
  usernameIsUnique,
  userIdExists,
}
