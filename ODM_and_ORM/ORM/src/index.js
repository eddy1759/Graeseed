const express = require('express')
const bodyParser = require('body-parser')
const {port} = require('./config/dbConfig')
const bookRoutes = require('./routes/bookRoute')
const authorRoutes = require('./routes/authorRoute')

const PORT = port.PORT

const app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/api/authors', authorRoutes)
app.use('/api/books', bookRoutes)

app.get('/', (req, res) => {
    res.send("Welcome to the bookstore API")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})