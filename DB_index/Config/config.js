require('dotenv').config()

exports.CONFIG = {
    PORT : process.env.PORT,
    postgreSQL: {
        user: process.env.POSTGRESQL_DB_USER,
        host: process.env.POSTGRESQL_DB_HOST,
        database: process.env.POSTGRESQL_DB_NAME,
        password: process.env.POSTGRESQL_DB_PASSWORD,
        port: 5432
    },
    mongoDb: {
        MONGODB_URI : process.env.MONGO_DB_CONNECTION_URL
    }
}