const express = require('express')
const path = require('path')
const helmet = require('helmet')

const connectToDB = require('./dbConfig')
const router = require('./userRoute')
const httpLogger = require('./Middlewares/httpLogger')
const limiter = require('./Middlewares/rateLimiter')
const logger = require('./Middlewares/logger')
require('dotenv').config({path: path.resolve(__dirname, './.env')})


const app = express()

const PORT = process.env.PORT || 3000


connectToDB()

app.use(express.json());
// for Security
app.use(helmet());
app.use(httpLogger)
app.use(limiter)

app.use('/user', router)

app.get('/', (req, res) => {
    return res.status(200).send("<h1>Logging, Hashing and Security with Express</h1>")
})

app.listen(PORT, () => {
    logger.info(`Server connected to port: ${PORT}`)
})
