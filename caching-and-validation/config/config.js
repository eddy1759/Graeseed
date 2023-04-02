const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')})

const CONFIG = {
    REDIS: {
        password: process.env.REDIS_PASS,
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        username: 'Default'
    },
    MONGO_DB: process.env.MONGO_DB,
}


module.exports = CONFIG;