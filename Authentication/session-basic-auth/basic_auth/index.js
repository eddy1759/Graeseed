const express = require('express')
const authenticateUser = require('./basic.authMW')
const dbSetup = require('../dbConfig')
const userRouter = require('./userRoute');
const postRouter = require('./postRouter')

const app  = express()
dbSetup()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))



// app.use(authenticateUser)
app.use(userRouter)
app.use(postRouter)

app.get('/', (req, res) => {
    res.status(200).send("Welcome to Eddy space")
})

// Start the Express app
app.listen(3000, () => {
    console.log('Server started on port 3000');
});