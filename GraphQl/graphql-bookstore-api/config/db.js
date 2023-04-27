const path = require('path')
const mongoose = require('mongoose')
require('dotenv').config({path: path.resolve(__dirname, '../.env')})


const connectDB = async () => {
    mongoose.set('strictQuery', false)

    await mongoose.connect(process.env.MONGO_DB)

    mongoose.connection.on("connected", () => {
        console.info("Connection to database succesfully")
    })

    mongoose.connection.on("error", (error) => {
        console.error("An error occuured while trying to connect to the database")
        console.error(error)
    })
}

module.exports = connectDB