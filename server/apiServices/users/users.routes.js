const express = require('express')
const {create, login} = require('./users.controller')
const {userValidator} = require('./middlewares/user.validator')
const userRouter = express.Router()

userRouter.post('/register', userValidator, create)
userRouter.post('/login', login)

module.exports = {userRouter}