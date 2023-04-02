const { client }  = require('../MW/cache');
const bookModel = require('../model/books');

const getAllBooks = async (req, res) => {
    try {
        const books = await bookModel.find({});
        await client.setex('books', 3600, JSON.stringify(books));
        res.status(200).render('books', { books });
    } catch (error) {
        console.error(err);
    }
};


const getBookById = async (req, res, next) => {
    const bookId = req.params.id;
    try {
        const book = await bookModel.findById(bookId);
        if (!book) {
            res.status(404).send('Book with id not found');
        } else {
            // req.book = book;
            // await client.setex(bookId, 3600, JSON.stringify(book));
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

const addBookPage = (req, res) => {
    res.status(200).render('addBook')
}

const createBook = async (req, res) => {
    const book = req.body;
    try {
        const newBook = await bookModel.create(book);
        res.status(302).redirect('/books');
        return newBook;
    } catch (error) {
        console.log(error);
    }
};

const renderEditBook = async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await bookModel.findById(bookId);
        if (!book) {
            return res.status(404).redirect('/books');
        }
        res.render('updateBookPage', { book });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};

const updateBook = async (req, res) => {
    const bookId = req.params.id;
    const bookUpdates = req.body;
    try {
        const updatedBook = await bookModel.findByIdAndUpdate(bookId, bookUpdates, { new: true });
        if (!updatedBook) {
            res.status(404).send('Book with id not found');
        } else {
            // client.set(bookId, JSON.stringify(updatedBook));
            res.status(302).redirect('/books');
        }
    } catch (error) {
        console.log(error);
    }
};

const renderDeletePage = async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await bookModel.findById(bookId);
        if (!book) {
            return res.status(404).redirect('/books');
        }
        res.render('deleteBookPage', { book });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};



const deleteBook = async (req, res) => {
    const bookId = req.params.id;
    try {
        const book = await bookModel.findByIdAndRemove(bookId);
        if (!book) {
            res.status(404).send('Book with id not found');
        } else {
            client.del(bookId);
            res.status(302).redirect('/books');
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    addBookPage,
    renderEditBook,
    updateBook,
    renderDeletePage,
    deleteBook
};