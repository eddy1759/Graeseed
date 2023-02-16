const Book = require('../models/books')

// implementing CRUD function

// GET ALL BOOK (READ)

const getBooks = async(req, res) => {
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

const getBookById = async(req, res) => {
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

