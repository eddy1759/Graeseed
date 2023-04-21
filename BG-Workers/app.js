const express = require('express')
const bookRouter = require('./bookRouter')


const connectToDB = require('./dbConfig')

const app = express()
connectToDB()

app.use(express.json())

app.use('/book', bookRouter)

app.listen(3000, () => console.info('Server running on port 3000'))