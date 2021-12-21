const router = require('express').Router()

// const Items = require('./items-model')
const { validator } = require('../global-middleware')
const { itemSchema } = require('./items-schema')
const { validateItemId } = require('./items-middleware')

// [GET] /api/items
router.get('/', (req, res, next) => {
  res.json({ message: 'WIP - [GET] /api/items', data: [] }).catch(next)
})

// [GET] /api/items/:item_id
router.get('/:item_id', (req, res, next) => {
  res.status(201).json({ message: 'WIP - [GET] /api/items/:item_id', data: {} }).catch(next)
})

// [POST] /api/items
router.post('/', validator(itemSchema), (req, res, next) => {
  res.status(201).json({ message: 'WIP - [POST] /api/items', data: {} }).catch(next)
})

// [PUT] /api/items/:item_id
router.put('/:item_id', [validator(itemSchema), validateItemId], (req, res, next) => {
  res.json({ message: 'WIP - [PUT] /api/items/:item_id', data: {} }).catch(next)
})

// [DELETE] /api/items/:item_id
router.delete('/:item_id', [validateItemId], (req, res, next) => {
  res.json({ message: 'WIP - [DELETE] /api/items/:item_id', data: {} }).catch(next)
})

module.exports = router
