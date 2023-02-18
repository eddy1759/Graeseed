const Book = require('../models/books')

// implementing CRUD function

// GET ALL BOOK (READ)
async function getBooks (req, res){
    try {
        const books = await Book.find({})
        res.status(200).json({
            status: true,
            data: books
        })
    } catch (error) {
        console.log("Error getting books: ", error)
        res.status(500).send("Error getting books")
    }
}

// GET BOOK By ID (READ)
async function getBookById (req, res){
    const {id} = req.params.id
    try {
       const book = await Book.findById(id)
       if (!book){
           return res.status(404).send("This Book cannot be found")
       }
       res.status(200).json({
           status: true,
           data: book
       })

    } catch (error) {
        console.log("Error getting book: ", error)
        res.status(500).send("Error getting book")
    }
}


// CREATE BOOK
async function createBook (req, res) {
    const {
        title,
        year,
        isbn,
        price,
        rating,
        pages
    } = req.body

    try {
        const bookToSave = {title,year,isbn,price,rating,pages}
       const book = await Book.create(bookToSave) 
       res.status(200).json({
           status: true,
           book
       })
    } catch (error) {
        console.log("Error creating book: ", error)
        res.status(500).send("Error creating book")
    }
}

// Updating Books
async function updateBook (req, res) {
    const id = req.params.id
    const bookToUpdate = req.body
    try {
        const book = await Book.findByIdAndUpdate(id, bookToUpdate,{new: true})
        res.status(200).json({
            status: true,
            msg: "Book updated successfuly",
            book
        })
    } catch (error) {
        console.log("Error updating book: ", error)
        res.status(500).send("Error updating book")
    } 
}

async function deleteBookByID (req, res) {
    const id = req.params.id
    try {
        const book = await Book.findByIdAndDelete(id)
        res.status(200).json({
            status: true,
            msg: "Book deleted successfully",
            book
        })
    } catch (error) {
        console.log("Error deleting book: ", error)
        res.status(500).send("Error deleting book")
    }
}

module.exports = {
    getBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBookByID
}


