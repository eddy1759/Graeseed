const express = require('express')
const CONFIG = require('./config/config')
const checkRole = require('../authorizeHelper')
const bodyParser = require('body-parser');
const dbSetup = require('./config/db')

const authRoute = require('./routes/authRouter');

dbSetup()


require("./authentication/auth")

const app = express()
const PORT = CONFIG.PORT


app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', authRoute);

// renders the home page
app.get('/', (req, res) => {
    res.send('Welcome to the book API');
});

// Protect a route with RBAC
app.get('/admin', checkRole('admin'), (req, res) => {
    res.status(200).json({ message: 'Welcome to the admin area' });
 });

app.listen(PORT, () => {
    console.log(`Server listening to port: ${PORT}`)
})

