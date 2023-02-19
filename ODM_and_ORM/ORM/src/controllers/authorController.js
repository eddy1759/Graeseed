const db = require('../models')


// Get Model
const Author = db.authors


// Add CRUD controller functions
async function getAuthors(req, res) {
    try {
        const authors = await Author.findAll()
        res.json(authors)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'An error occurred while retrieving the authors.' });
    }
}

async function getAuthorById(req, res) {
    try {
        const author = await Author.findByPk(req.params.id)
        res.json(author)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Author not found.' });
    }
}

async function createAuthor(req, res) {
    let authorInfo = req.body;
    try {
        const author = await Author.create(authorInfo);
        res.status(201).json(author);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred while creating the author.' });
    }

}

async function updateAuthor(req, res) {
    try {
        const author = await Author.findByPk(req.params.id);
        if (author) {
            await author.update(req.body);
            res.status(201).json(author);
        } else {
            res.status(404).json({
                message: 'Author not found'
            });
        }
    } catch (error) {
        conole.log(error);
        res.status(500).json({ message: 'An error occurred while updating the author.' });
    }
}

async function deleteAuthor(req, res,) {
    try {
        const author = await Author.findByPk(req.params.id);
        if (author) {
            await author.destroy();
            res.status(200).json(author);
        } else {
            res.status(404).json({
                message: 'Author not found'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occurred while deleting the author.' });
    }
}


module.exports = {
    createAuthor,
    getAuthors,
    getAuthorById,
    updateAuthor,
    deleteAuthor
}