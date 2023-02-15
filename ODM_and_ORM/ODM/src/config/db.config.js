const mongoose = require('mongoose');
const CONFIG = require('./config')

function connectToMongoDb() {
    mongoose.connect(CONFIG.DB_URI)

    mongoose.connection.on(
        "connected", () => {
            console.log("Connected Successfully to Mongo Database")
        }
    )

    mongoose.connection.on(
        "error", (error) => {
            console.log(error)
            console.log("An error occurred while trying to connect to mongo database")
        }
    )
}

module.exports = connectToMongoDb