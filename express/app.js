const express = require('express')
const { authors, books } = require('./fixtures')


const PORT = 4000
const app = express()


app.get('/books', (req, res) => {
    res.status(200).json({
        status: true,
        books
    })
})

app.get('/authors', (req, res) => {
    res.status(200).json({
        status: true,
        authors
    })
})

app.get('/', (req, res) => {
    res.status(200).send("Welcome to the Home page")
})

app.get('*', (req, res) => {
    res.send("This Route does not exist")
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})