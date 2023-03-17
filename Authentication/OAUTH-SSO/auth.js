const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email'],
}));

router.get('/auth/google/callback', passport.authenticate('google', {
  failureRedirect: '/',
}), (req, res) => {
  res.redirect('/dashboard');
});

router.get('/', (req, res) => {
  res.render('login');
});


router.get('/logout', function(req, res){
    req.logout(function(err){
      if(err) return next(err);
      res.redirect('/');
    });
});


module.exports = router;
