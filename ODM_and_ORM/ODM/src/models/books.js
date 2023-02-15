const mongoose = require('mongoose');

const Schema = mongoose.Schema

const BookModelSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        max: [2022, 'Year must be less than or equal to 2022']
    },
    isbn: {
        type: String,
        required: true,
        unique: [true, "ISBN must be unique"]
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be greater than or equal to 0']
    },
    rating: {
        type: Number,
        required: true,
        min: [1, 'rating must be less than 5 and greater than 0']
    },
    pages: {
        type: Number,
        required: true,
        min: [20, 'pages must be greater than or equal to 20']
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    lastUpdatedAt: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model("books", BookModelSchema);