const express = require('express')
const authorController = require('../controller/author.controller')

const authorRoute = express.Router()

authorRoute.get('/', authorController.getAuthors)
authorRoute.get('/:id', authorController.getAuthorsById)
authorRoute.post('/', authorController.createAuthor)
authorRoute.put('/:id', authorController.updateAuthor)
authorRoute.delete('/:id', authorController.deleteAuthorByID)

module.exports = authorRoute;