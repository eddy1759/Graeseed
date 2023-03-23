const mongoose = require('mongoose');
const CONFIG = require('../config/config');

function connectToDb() {
    mongoose.set("strictQuery", false)

    mongoose.connect(CONFIG.DB_URI)

    mongoose.connection.on("connected", () => {
        console.info("Database Connected Successfully")
    })

    mongoose.connection.on("error", (error) => {
        console.error("An error occurred", error)
    })
}

module.exports = connectToDb;