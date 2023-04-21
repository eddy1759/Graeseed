const express = require('express')
const { getAllBooks, getBookById, addBook, updateBook, deleteBook, search } = require('./bookController')

const bookRouter = express.Router()


bookRouter.get('/', getAllBooks)
bookRouter.get('/:id', getBookById)
bookRouter.post('/', addBook)
bookRouter.put('/:id', updateBook)
bookRouter.delete('/:id', deleteBook)
bookRouter.get('/search', search)




module.exports = bookRouter