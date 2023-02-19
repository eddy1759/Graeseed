const express = require('express')
const bookController = require('../controllers/bookController')

const router = express.Router()

router.get('/', bookController.getBooks)
router.get('/:id', bookController.getBookById)
router.post('/', bookController.createBook)
router.put('/:id', bookController.updateBook)
router.delete('/:id', bookController.deleteBook)

module.exports = router