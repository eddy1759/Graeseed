const express = require('express')
const path = require('path')
const mime = require('mime');
const methodOverride = require('method-override')

const connectToDb = require('./config/dbConfig')
const bookRouter = require('./routes/book.routes')

const PORT = process.env.PORT || 3000
const app = express()

connectToDb()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.use((path, req, res, next) => {
    const mimeType = mime.getType(path);
        res.header('Content-Type', mimeType);
        next();
    }
);

app.get('/style.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'public', 'style.css'));
  });

app.use(methodOverride('_method'))
app.use('/', bookRouter)

app.get('/', (req, res) => {
    res.status(200).render('index')
})

app.use((err, req, res, next) => {
    console.error(err)
    const errorStatus = err.status || 500
    res.status(errorStatus).send(err.message)
    next()
})

app.listen(PORT, () => {
    console.info(`Server started on port: ${PORT}`)
})

