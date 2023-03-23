const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        max: [2023, 'Year must be less than 2023']
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be greater than 0']
    }},
    {timestamps: true}
)

module.exports= mongoose.model('Books', bookSchema);
