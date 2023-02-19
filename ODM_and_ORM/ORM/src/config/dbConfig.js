require('dotenv').config()


const CONFIG = {
    port: {
        PORT: process.env.PORT
    },
    database: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        dbName: process.env.DB_NAME,
        dialect: 'postgres'
    }
}

module.exports = CONFIG;