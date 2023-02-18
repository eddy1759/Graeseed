const express = require('express')
const bodyParser = require('body-parser')
const bookRoute = require('./routes/book.route')
const authorRoute = require('./routes/author.route')
const connectToMongoDb = require('./config/dbConfig')
const CONFIG = require('./config/config')

const app = express()

connectToMongoDb()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/api/author', authorRoute)
app.use('/api/book', bookRoute)

app.get('/', (req, res) => {
    res.status(200).send("Welcome to bookstore")
})

app.use('/*', (req, res) => {
    res.status(404).send('<h1>Page Not Found</h1>')
})

app.listen(CONFIG.PORT, () => {
    console.log(`Server listening to port: ${CONFIG.PORT}`)
})