const router = require('express').Router()

// const Users = require('./user-model.js')
const { validator } = require('../global-middleware')
const { userSchema } = require('./user-schema')
const { userIdExists } = require('./user-middleware')

// [GET] /api/users
router.get('/', (req, res, next) => {
  res.json({ message: 'WIP - [GET] /api/users', data: [] }).catch(next)
})

// [GET] /api/users/:user_id
router.get('/:user_id', userIdExists, (req, res, next) => {
  res.json({ message: 'WIP - [GET] /api/users/:user_id', data: {} }).catch(next)
})

// [GET] /api/users/:user_id/items
router.get('/:user_id/items', userIdExists, (req, res, next) => {
  res.json({ message: 'WIP - [GET] /api/users/:user_id/items', data: [] }).catch(next)
})

// POST route might not be necessary, should use /auth/register instead
// // [POST] /api/users
// router.post('/', validator(userSchema), (req, res, next) => {
//   res.status(201).json({ message: 'WIP - [POST] /api/users', data: {} }).catch(next)
// })

// [PUT] /api/users/:user_id
router.put('/:user_id', [validator(userSchema), userIdExists], (req, res, next) => {
  res.json({ message: 'WIP - [PUT] /api/users/:user_id', data: {} }).catch(next)
})

module.exports = router
