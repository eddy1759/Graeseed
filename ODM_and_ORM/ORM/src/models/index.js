const dbConfig = require('../config/dbConfig')
const {Sequelize, DataTypes} = require('sequelize')

const Book = require('./book')
const Author = require('./author')

const database = dbConfig.database

const sequelize = new Sequelize(
    database.dbName,
    database.user,
    database.password,
    {
        host: database.host,
        dialect: database.dialect
    }
)

// authenticating the database connection
sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    }).catch(err => {
        console.log('Unable to connect to the database:', err);
    })


const db = {}

db.sequelize = sequelize;
db.Sequelize = Sequelize;


// Add our tables
db.books = Book(sequelize, DataTypes);
db.authors = Author(sequelize, DataTypes);


// sync all models
// force: false will not drop the table if it already exists
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Database & tables synced');
    }).catch(err => {
        console.error('Unable to sync database & tables:', err);
    })

module.exports = db;