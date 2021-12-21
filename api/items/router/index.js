const router = require('express').Router()

const { validator } = require('../../validation')
const { itemSchema } = require('../schema')

const { validateItemId } = require('../middleware')

// const Items = require('../model')

router.get('/', (req, res, next) => {
  res.json({ message: 'wip - array of objects', data: null }).catch(next)
})

router.get('/:item_id', (req, res, next) => {
  res.status(201).json({ message: 'wip - single object', data: null }).catch(next)
})

router.post('/', validator(itemSchema), (req, res, next) => {
  const item = req.item
  res.status(201).json({ message: 'wip - single object', data: item }).catch(next)
})

router.put('/:item_id', [validator(itemSchema), validateItemId], (req, res, next) => {
  const item = req.item
  res.json({ message: 'wip - single object', data: item }).catch(next)
})

router.delete('/:item_id', [validateItemId], (req, res, next) => {
  const { item_id } = req.params

  res.json({ message: 'wip - item_id of deleted item', data: { item_id: item_id } }).catch(next)
})

module.exports = router
