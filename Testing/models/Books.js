const mongoose = require("mongoose")

const Schema = mongoose.Schema

const bookSchema = new Schema({
    title: {type:String, required: true},
    author: {type:String, required: true},
    year: {type:Number, max:[2023]},
    price: {type:Number, min:[0]}
    
})

module.exports = mongoose.model("Book", bookSchema)
