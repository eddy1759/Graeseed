const mongoose = require('mongoose')

const Schema = mongoose.Schema

const AuthorModelSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    dob: {
        type: Date
    },
    country: {
        type: String
    }},
    {timestamps: true}
)

module.exports = mongoose.model('authors', AuthorModelSchema)