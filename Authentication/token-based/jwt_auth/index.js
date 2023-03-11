const express = require('express')
const dbSetup = require('./db')
const checkRole = require('../authorizeHelper')
const bodyParser = require('body-parser');
const userRouter = require('./userRoute')
require('dotenv').config({path: "./.env"})


const app = express()
const PORT = process.env.PORT || 3000

dbSetup()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(userRouter);

app.get('/', (req, res) => {
    res.status(200).send("You're welcome")
})

// Protect a route with RBAC
app.get('/admin', checkRole('admin'), (req, res) => {
    res.status(200).json({ message: 'Welcome to the admin area' });
 });

app.listen(PORT, () => {
    console.log(`Server listening to port: ${PORT}`)
})