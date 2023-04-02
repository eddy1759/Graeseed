const mongoose = require('mongoose')
const CONFIG = require('./config')


const connectToDb = () => {
    mongoose.set('strictQuery', false)
    mongoose.connect(CONFIG.MONGO_DB)
    mongoose.connection.on("connected", () => {
        console.log("Connected to Database successfully")
    })

    mongoose.connection.on("error", (error) => {
        console.log("An error occurred, while connecting to the database")
        console.error(error)
    })
}


module.exports = connectToDb
