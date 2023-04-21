const express = require('express')
const { Queue } = require('bull')
const searchJob = require('./workers/searchJob')
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('./bookController')

const bookRouter = express.Router()


bookRouter.get('/', getAllBooks)
bookRouter.get('/:id', getBookById)
bookRouter.post('/', addBook)
bookRouter.put('/:id', updateBook)
bookRouter.delete('/:id', deleteBook)


bookRouter.get('/search', async (req, res) => {
    const query = req.query.q
    const job = await searchQu
})


module.exports = bookRouter