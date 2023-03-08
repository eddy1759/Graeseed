const express = require('express');
const session = require('express-session');
const userRouter = require('./userRoute');
const dbSetup = require('../dbConfig')

const app = express();
const PORT = process.env.port || 3000

dbSetup()

app.use(express.json())

app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: false
}))

app.use('/user', userRouter);

app.get('/', (req, res) => {
    res.status(200).send("You're Welcome")
})

app.listen(PORT, () => {
    console.info(`Server listening to port: ${PORT}`)
})