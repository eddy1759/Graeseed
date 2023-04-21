const Book = require('./bookModel')
const SearchWorker = require('./workers/searchWorker')

async function getAllBooks (req, res) {
    const books = await Book.find({})
    res.status(200).json(books)
}

async function addBook (req, res) {
    const { title,author, year, price} = req.body
    try {
        const newBook = await Book.create({
            title,author, year, price
        })
        res.status(201).json({msg: "Books added successfully"})
    } catch (error) {
        console.error(error)
        res.status(500).send("Internal Server Error")
    }
}

async function getBookById (req, res) {
    const bookId = req.params.id;
    try {
        if (req.query.q) {
            return search(req, res);
        }
        const book = await Book.findById(bookId);
        if (!book) {
            return res.status(404).send('Book with id not found');
        }
        res.status(200).json({
            status: true,
            msg: book
        }) 
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
};



async function updateBook (req, res) {
    const bookId = req.params.id;
    const bookUpdates = req.body;
    try {
        const updatedBook = await Book.findByIdAndUpdate(bookId, bookUpdates, { new: true });
        if (!updatedBook) {
            res.status(404).send('Book with id not found');
        }
        res.status(200).json({
            status: true,
            updatedBook
        })
    } catch (error) {
        console.error(error);
    }
};

async function deleteBook (req, res) {
    const bookId = req.params.id;
    try {
        const book = await Book.findByIdAndRemove(bookId);
        if (!book) {
            res.status(404).send('Book with id not found');
        } 
        res.status(201).json({
            status: true,
            msg: "Book removed successfully"
        })
    } catch (error) {
        console.error(error);
    }
};


async function search (req, res) {
    const query = req.query.q;
    const searchWorker = new SearchWorker();
    try {
      const result = await searchWorker.search(query);
      res.json(result);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllBooks,
    addBook,
    getBookById,
    updateBook,
    deleteBook,
    search
};
