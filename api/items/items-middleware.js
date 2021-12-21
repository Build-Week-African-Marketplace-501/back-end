const Items = require('./items-model')

const validateItemId = (req, res, next) => {
  Items.getBy('item_id', parseInt(req.params.item_id)).then((item) => {
    if (!item) return next({ status: 404, message: 'item_id not found' })
    req.item = item
    next()
  })
}

module.exports = {
  validateItemId,
}
