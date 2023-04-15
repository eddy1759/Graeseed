const mongoose = require("mongoose")
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, './.env')})


const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;

