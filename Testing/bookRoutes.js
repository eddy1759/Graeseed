const express = require('express')
const {createBook, getBooks, updateBook, deleteBook} = require('./bookController')

const bookRouter = express.Router()

bookRouter.post('/', createBook)
bookRouter.get('/', getBooks)
bookRouter.put('/update/:id', updateBook)
bookRouter.delete('/delete/:id', deleteBook)


module.exports = bookRouter