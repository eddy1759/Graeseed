require('dotenv').config();

const Config = {
    PORT : process.env.PORT,
    DB_URI : process.env.MONGO_DB_CONNECTION_URL
}

module.exports = Config