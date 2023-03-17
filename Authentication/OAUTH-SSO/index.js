const express = require('express');
const session = require('express-session');
const passport = require('passport');
const path = require('path')
const mime = require('mime');

const authRoutes = require('./auth');
const passportConfig = require('./googleOauth');
const userModel = require('./userModel');
const dbConfig = require('./dbConfig')

require('dotenv').config({ path: path.resolve(__dirname, '.env') });

const app = express();

dbConfig()

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'views'), {
  setHeaders: (res, path) => {
    const contentType = mime.getType(path);
    res.set('Content-Type', contentType);
  },
}));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

passportConfig(passport);

app.use('/', authRoutes);


authRoutes.get('/dashboard', async (req, res) => {
  if (!req.user) {
    return res.redirect('/');
  }
  const user = await userModel.findById(req.user.id);
  res.render('dashboard', { user });
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});
