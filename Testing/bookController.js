const Book = require('./models/Books')


const createBook = async (req, res) => {
  const { title, author, year, price } = req.body;

  try {
    const book = new Book({ title, author, year, price });
    await book.save();
    res.status(201).json({book: book});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};


const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({
      books: books
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};


const getBookById = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findById(id)
    if (!book) {
      return res.status(404).json({
        msg: "Book not found"
      })
    }
    res.status(200).json({
      book: book
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};


const updateBook = async (req, res) => {
  const id = req.params.id;
  const { title, author, year, price } = req.body;

  try {
    const book = await Book.findByIdAndUpdate(
      id,
      { title, author, year, price },
      { new: true }
    );
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }
    res.status(200).json({book:book});
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};


const deleteBook = async (req, res) => {
  const id = req.params.id;

  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ msg: 'Book not found' });
    }
    res.status(200).json({ msg: 'Book removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook
}