const express = require('express')
const {createBook, getBooks, getBookById, updateBook, deleteBook} = require('./bookController')

const bookRouter = express.Router()

bookRouter.post('/', createBook)
bookRouter.get('/', getBooks)
bookRouter.get('/:id', getBookById)
bookRouter.put('/update/:id', updateBook)
bookRouter.delete('/delete/:id', deleteBook)


module.exports = bookRouter