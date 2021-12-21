const router = require('express').Router()

const Users = require('../users/user-model')
const {
  validateUsernameAndPassword,
  validateUniqueUsername,
  hashPassword,
} = require('./auth-middleware')

// [POST] /api/auth/register
router.post(
  '/register',
  [validateUsernameAndPassword, validateUniqueUsername, hashPassword],
  (req, res, next) => {
    Users.insert(req.user)
      .then((saved) => {
        res.status(201).json({ data: saved })
      })
      .catch(next)
  }
)
