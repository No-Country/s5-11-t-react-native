const express = require('express')
const { create, login } = require('./users.controller')
const waiterRouter = express.Router()

waiterRouter.post('/register', create)
waiterRouter.post('/login', login)

module.exports = { waiterRouter }
