const MongoClient = require('mongodb').MongoClient
const { Pool } = require('pg')
const CONFIG = require('./config').CONFIG

// Connecting to a mongo db
const client = new MongoClient(CONFIG.mongoDb.MONGODB_URI, { useUnifiedTopology: true })

// For progresql
const pool = new Pool({
    user: CONFIG.postgreSQL.user,
    host: CONFIG.postgreSQL.host,
    database: CONFIG.postgreSQL.database,
    password: CONFIG.postgreSQL.password,
    port: CONFIG.postgreSQL.port
})
const dbname = process.env.MONGO_DB
module.exports = {
    client,
    pool,
    dbname
}