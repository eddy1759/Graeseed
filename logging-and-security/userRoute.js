const express = require('express')
const { registerUser, login } = require('./userController')


const router = express.Router()

router.post('/signup', registerUser)
router.post('/signin', login)

module.exports = router