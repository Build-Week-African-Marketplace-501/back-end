/* eslint-disable */

const router = require('express').Router()

const { validator, sendUnpackedEntry, sendMessage } = require('../global-middleware')
const { userSchema } = require('../users/user-schema')
<<<<<<< HEAD
const { usernameIsUnique, } = require('../users/user-middleware')
const {  userIdExists } = require('../users/user-validation')
const { hashPassword, authenticate, constructToken } = require('./auth-middleware')
=======
const { getUser, usernameIsUnique, userExists, registerUser } = require('../users/user-middleware')
const {
  restricted,
  hashPassword,
  authenticate,
  constructToken,
  constructPayload,
} = require('./auth-middleware')
>>>>>>> 7c824f1548dd9a57379ee75e8eef1c36e943e3b3

// [POST] /api/auth/register
router.post(
  '/register',
  [validator(userSchema), getUser, usernameIsUnique, hashPassword, registerUser],
  sendMessage('user registered successfully')
)

// [POST] /api/auth/login
router.post(
  '/login',
  [validator(userSchema), getUser, userExists, authenticate, constructToken, constructPayload],
  sendUnpackedEntry('user')
)

// [GET] /api/auth/logout
router.get('/logout', restricted, sendMessage('user logged out successfully'))

module.exports = router
