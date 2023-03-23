const express = require('express')
const { requiresAuth } = require('express-openid-connect')
const bookController = require('../controllers/book.controller')

const bookRouter = express.Router()

bookRouter.get('/', requiresAuth(), bookController.getAllBooks)

bookRouter.post('/', requiresAuth(), bookController.addBook)

module.exports = bookRouter