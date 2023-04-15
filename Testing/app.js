const express = require('express');
const userRouter = require('./userRoutes')
const bookRouter = require('./bookRoutes')

const app = express();




app.use(express.json());

app.use('/user', userRouter)
app.use('/book', bookRouter)


module.exports = app