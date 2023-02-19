const db = require('../models');

// Get Model
const Book = db.books

// Add CRUD controller functions
async function getBooks(req, res) {
    try {
        const books = await Book.findAll()
        res.status(200).json(books)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'An error occurred while retrieving the authors.' });
    }
}

async function getBookById(req, res, ) {
    try {
        const book = await Book.findByPk(req.params.id)
        res.json(book)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Author not found.' });
    }
}

async function createBook(req, res, ) {
    let bookInfo = req.body;
    console.log(bookInfo)
    try {
        const book = await Book.create(bookInfo);
        res.status(201).json(book);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred while creating the a book.' });
        
    }

}

async function updateBook(req, res, ) {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.update(req.body);
            res.sataus(201).json(book);
        } else {
            res.status(404).json({
                message: 'Book not found'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred while updating the author.' });
    }
}

async function deleteBook(req, res, ) {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book) {
            await book.destroy();
            res.status(201).json(book);
        } else {
            res.status(404).json({
                message: 'Book not found'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred while deleting the author.' });
    }
}


module.exports = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook
}