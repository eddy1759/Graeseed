const mongoose = require('mongoose')

const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    yearPublished: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Book', bookSchema)