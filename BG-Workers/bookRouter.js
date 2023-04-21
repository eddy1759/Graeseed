const express = require('express')
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('./bookController')

const bookRouter = express.Router()


bookRouter.get('/', getAllBooks)
bookRouter.get('/:id', getBookById)
bookRouter.post('/', addBook)
bookRouter.put('/:id', updateBook)
bookRouter.delete('/:id', deleteBook)

module.exports = bookRouter