const router = require('express').Router()

const Users = null

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
