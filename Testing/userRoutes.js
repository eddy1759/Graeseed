const express = require('express')
const {createUser, login} = require('./userController')

const userRouter = express.Router()

userRouter.post('/signup', createUser)

userRouter.post('/login', login)


module.exports = userRouter