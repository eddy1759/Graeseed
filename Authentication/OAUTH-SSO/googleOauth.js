const GoogleStrategy = require('passport-google-oauth20').Strategy;
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });


module.exports = function(passport) {
    const userModel = require('./userModel');
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback',
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        
        const existingUser = await userModel.findOne({ email: profile.emails[0].value });
        if (existingUser) {
          return done(null, existingUser);
        }
        const newUser = new userModel({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value,
        });
        
        await newUser.save();
        done(null, newUser);
      } catch (error) {
        done(error, null);
      }
    }
  ));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await userModel.findById(id);
      done(null, user);
    } catch (error) {
      done(error, null);
    }
  });
};
