const express = require('express')


const connectToDB = require('./dbConfig')

const app = express()
connectToDB()

app.use(express.json())


app.listen(3000, () => console.info('Server running on port 3000'))