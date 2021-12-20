const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const db = require('./data/db-config')
const userRouter = require('./users/user-router.js')

// const authRouter = require('./auth/router')
// const usersRouter = require('./items/router')
const itemsRouter = require('./items/router')

// eslint-disable-next-line
const { restricted, errorHandling } = require('./middleware')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use('/api/users', userRouter)

// server.use('/api/auth', authRouter)
// server.use('/api/users', usersRouter)
server.use('/api/items', itemsRouter)

server.use(errorHandling)

module.exports = server
