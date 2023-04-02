const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    genre: {
        type: String,
        required: true 
    },
    price: {
        type: Number,
        required: true
    }},
    {timestamps: true}
)

module.exports= mongoose.model('Books', bookSchema);
