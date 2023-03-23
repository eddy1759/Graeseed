const bookModel = require("../models/books")

function getAllBooks(req, res) {
    bookModel.find()
        .then(books => {
            res.status(200).render('books', { books: books })
        })
        .catch(error => {
            console.error(error)
            res.status(500).send(error)
        })
}

function addBook(req, res) {
    const book = req.body
    bookModel.create(book)
     .then(books => {
         res.status(201).redirect('/books')
     })
     .catch(error => {
         console.error(error)
         res.status(500).send(error)
     })
}

module.exports = {
    getAllBooks,
    addBook
}