const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const authRouter = require('./auth/router')
const usersRouter = require('./items/router')
const itemsRouter = require('./items/router')

// eslint-disable-next-line
const { restricted } = require('./auth/middleware')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/auth', authRouter)
server.use('/api/users', restricted, usersRouter)
server.use('/api/items', restricted, itemsRouter)

// eslint-disable-next-line
server.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  })
})

module.exports = server
