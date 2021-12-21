/* eslint-disable */

const router = require('express').Router()

// const Items = require('./items-model')
const { validator } = require('../global-middleware')
const { itemsSchema } = require('./items-schema')
const { validateItemId } = require('./items-middleware')

// [GET] /api/items
router.get('/', (req, res, next) => {
  res.json({ message: 'WIP - [GET] /api/items', data: [] })
})

// [GET] /api/items/:item_id
router.get('/:item_id', validateItemId, (req, res, next) => {
  res.status(201).json({ message: 'WIP - [GET] /api/items/:item_id', data: {} })
})

// [POST] /api/items
router.post('/', validator(itemsSchema), (req, res, next) => {
  res.status(201).json({ message: 'WIP - [POST] /api/items', data: {} })
})

// [PUT] /api/items/:item_id
router.put('/:item_id', [validator(itemsSchema), validateItemId], (req, res, next) => {
  res.json({ message: 'WIP - [PUT] /api/items/:item_id', data: {} })
})

// [DELETE] /api/items/:item_id
router.delete('/:item_id', validateItemId, (req, res, next) => {
  res.json({ message: 'WIP - [DELETE] /api/items/:item_id', data: {} })
})

module.exports = router
