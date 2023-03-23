const express = require("express")
const { requiresAuth } = require('express-openid-connect')
const path = require('path');
const mime = require('mime');

const auth0Middleware = require('./auth/auth0')
const CONFIG = require('./config/config')
const bookRouter = require("./routes/books.routes")
const connectToDb = require('./db/dbSetup')

const app = express()
// Connect to Mongodb Database
connectToDb()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'views'), {
    setHeaders: (res, path) => {
      const contentType = mime.getType(path);
      res.set('Content-Type', contentType);
    },
  }));

// requiresAuth,

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth0Middleware);

app.use('/books',  bookRouter)

app.get('/', (req, res) => {
    res.status(200).send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
})


app.get('/profile', requiresAuth(), (req, res) => {
    const user = JSON.parse(JSON.stringify(req.oidc.user))
    res.render('profile', { user })
})

//Error handler middleware
app.use((err, req, res, next) => {
    console.error(err)
    const errorStatus = err.status || 500
    res.status(errorStatus).send(err.message)
    next()
})

app.listen(CONFIG.PORT, () => {
    console.info(`Server started on http://localhost:${CONFIG.PORT}`)
})