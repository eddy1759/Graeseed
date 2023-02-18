const express = require('express')
const bookController = require('../controller/books.controller')
const bookRoute = express.Router()

bookRoute.get('/', bookController.getBooks)
bookRoute.get('/:id', bookController.getBookById)
bookRoute.post('/', bookController.createBook)
bookRoute.put('/:id', bookController.updateBook)
bookRoute.delete('/:id', bookController.deleteBookByID)

module.exports = bookRoute;