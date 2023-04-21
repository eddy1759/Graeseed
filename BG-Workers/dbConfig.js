const mongoose = require('mongoose')
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, './.env')})


const connectToDB = async () => {
    mongoose.set('strictQuery', false)

    mongoose.connect(process.env.MONGO_DB)

    mongoose.connection.on("connected", () => {
        console.info("Database connected successfully")
    })

    mongoose.connection.on("error", (error) => {
        console.info("An error ocuured while connecting to DB")
        console.error(error)
    })
}

module.exports = connectToDB;