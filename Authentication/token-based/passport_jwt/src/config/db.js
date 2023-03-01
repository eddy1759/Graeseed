require('dotenv').config({ path: '../.env' }); 
const mongoose = require('mongoose');
const CONFIG = require('./config')

function dbSetup() {
    mongoose.set('strictQuery', false)
    
    mongoose.connect(CONFIG.DB)

    mongoose.connection.on("connected", () => {
        console.log("Connected to database successful")
    })

    mongoose.connection.on("error", () => {
        console.log("An error occur while connecting to database")
    })
}

module.exports = dbSetup
