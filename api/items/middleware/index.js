const { Validation } = require('../../../validation')

const Items = require('../model')

const validateItem = (req, res, next) => {
  const { item_name, description, location, price } = req.body

  const validates =
    Validation.requiredString(item_name) &&
    Validation.requiredString(description) &&
    Validation.requiredString(location) &&
    Validation.requiredString(price)

  if (!validates) {
    return next({
      status: 404,
      message: 'item_name, description, location, and price are required',
    })
  }

  req.item = { item_name, description, location, price }
  next()
}

const validateItemId = (req, res, next) => {
  const item = Items.getBy('item_id', parseInt(req.params.item_id))

  if (!item) return next({ status: 404, message: 'item_id not found' })

  next()
}

module.exports = {
  validateItem,
  validateItemId,
}
