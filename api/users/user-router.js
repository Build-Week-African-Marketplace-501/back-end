const router = require('express').Router()

const {
  // validator,
  sendEntries,
  // sendEntry,
  // sendEntryId,
  sendUnpackedEntry,
} = require('../global-middleware')
// const { userSchema } = require('./user-schema')
const {
  getUsers,
  getUserItems,
  getUserById,
  sanitizeUsers,
  sanitizeItems,
  constructUserPayload,
} = require('./user-middleware')

// [GET] /api/users
router.get('/', [getUsers, sanitizeUsers], sendEntries('users'))

// [GET] /api/users/:user_id
router.get(
  '/:user_id',
  [getUserById, getUserItems, sanitizeItems, constructUserPayload],
  sendUnpackedEntry('user')
)

// // [GET] /api/users/:user_id/items
router.get('/:user_id/items', [getUserById, getUserItems], sendUnpackedEntry('items'))

// // [PUT] /api/users/:user_id
// router.put('/:user_id', [validator(userSchema), userIdExists], (req, res, next) => {
//   users
//     .add(req.params.user_id, req.body.items)
//     .then((item) => {
//       res.json(item)
//     })
//     .catch((error) => {
//       next(error)
//     })
// })

module.exports = router
