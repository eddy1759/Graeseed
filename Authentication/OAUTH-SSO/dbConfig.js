const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, './.env')})

function dbSetup() {
    mongoose.set('strictQuery', false)

    mongoose.connect(process.env.DB)

    mongoose.connection.on("connected", () => {
        console.log("Connected Successfully to Database")
    })

    mongoose.connection.on("Error", () => {
        console.log("An Error occurred when connecting to database")
    })
}

module.exports = dbSetup;