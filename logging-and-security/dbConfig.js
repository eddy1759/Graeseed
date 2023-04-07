const mongoose = require('mongoose')
const logger = require('./Middlewares/logger')
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, './.env')})


const connectToDb = () => {
    mongoose.set("strictQuery", false)

    mongoose.connect(process.env.MONGO_DB)

    mongoose.connection.on("connected", () => {
       logger.info("Database connectd successfully") 
    })

    mongoose.connection.on("error", (error) => {
        logger.error("An error occurred while connecting to the database")
        logger.error(error)
    })
}

module.exports = connectToDb