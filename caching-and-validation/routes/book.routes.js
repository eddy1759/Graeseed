const express = require('express')
const { getAllBooks, addBookPage, getBookById, renderEditBook, createBook, updateBook, renderDeletePage, deleteBook} = require('../controller/bookController')
const { cacheMW }  = require('../MW/cache')
const { AddBookValidationMW, UpdateBookValidationMW } = require('../MW/validator')


const bookRouter = express.Router()

bookRouter.get('/books', cacheMW, getAllBooks)
bookRouter.get('/books/new', addBookPage)
bookRouter.post('/books', AddBookValidationMW, createBook)
bookRouter.get('/books/:id/edit', renderEditBook)
// bookRouter.get('/:id', cacheMW, getBookById)

bookRouter.put('/books/update/:id', UpdateBookValidationMW,  updateBook);
bookRouter.get('/books/:id/confirm-delete', renderDeletePage) 

bookRouter.delete('/books/:id', deleteBook);


module.exports = bookRouter