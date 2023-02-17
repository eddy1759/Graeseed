const Author = require('../models/authors')

// implementing CRUD function

// GET ALL Authors (READ)
const getAuthors = async(req, res) => {
    try {
        const authors = await Author.find({})
        res.status(200).json({
            status: true,
            data: authors
        })
    } catch (error) {
        console.log("Error getting Author: ", error)
        res.status(500).send("Error getting Author")
    }
}

// GET Authors By ID (READ)
const getAuthorsById = async(req, res) => {
    const {id} = req.params.id
    try {
       const author = await Author.findById(id)
       if (!author){
           return res.status(404).send("This Author cannot be found")
       }
       res.status(200).json({
           status: true,
           data: author
       })

    } catch (error) {
        console.log("Error getting author: ", error)
        res.status(500).send("Error getting author")
    }
}


// CREATE Author
const createAuthor = async(req, res) => {
    const {
        title,
        year,
        isbn,
        price,
        rating,
        pages
    } = req.body

    try {
        const authorToSave = {title,year,isbn,price,rating,pages}
       const author = await Author.create(authorToSave) 
       res.status(200).json({
           status: true,
           author
       })
    } catch (error) {
        console.log("Error creating author: ", error)
        res.status(500).send("Error creating author")
    }
}

// Updating Authors
const updateAuthor = async(req, res) => {
    const id = req.params.id
    const authorToUpdate = req.body
    try {
        const author = await Author.findByIdAndUpdate(id, authorToUpdate,{new: true})
        res.status(200).json({
            status: true,
            msg: "Author updated successfuly",
            author
        })
    } catch (error) {
        console.log("Error updating author: ", error)
        res.status(500).send("Error updating author")
    } 
}

const deleteAuthorByID = async(req, res) => {
    const id = req.params.id
    try {
        const author = await Author.findByIdAndDelete(id)
        res.status(200).json({
            status: true,
            msg: "Author deleted successfully",
            author
        })
    } catch (error) {
        console.log("Error deleting author: ", error)
        res.status(500).send("Error deleting author")
    }
}

module.exports = {
    getAuthors,
    getAuthorsById,
    createAuthor,
    updateAuthor,
    deleteAuthorByID
}


