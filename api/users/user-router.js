const router = require('express').Router()

// const Users = require('./user-model.js')
const { validator } = require('../global-middleware')
const { addUserSchema } = require('./user-schema')
const { userIdExists } = require('./user-middleware')

// [GET] /api/users
router.get('/users', (req, res, next) => {
  res.json({ message: 'WIP - [GET] /api/users', data: [] }).catch(next)
})

// [GET] /api/users/:user_id
router.get('/:id', userIdExists, (req, res, next) => {
  res.json({ message: 'WIP - [GET] /api/users/:user_id', data: {} }).catch(next)
})

// [POST] /api/users
router.post('/', validator(addUserSchema), (req, res, next) => {
  res.status(201).json({ message: 'WIP - [POST] /api/users', data: {} }).catch(next)
})

// [PUT] /api/users/:user_id
router.put('/:user_id', [validator(addUserSchema), userIdExists], (req, res, next) => {
  res.json({ message: 'WIP - [PUT] /api/users/:user_id', data: {} }).catch(next)
})

// [DELETE] /api/users/:user_id
router.delete('/:id', userIdExists, (req, res, next) => {
  res.json({ message: 'WIP - [DELETE] /api/users/:user_id', data: {} }).catch(next)
})

module.exports = router
