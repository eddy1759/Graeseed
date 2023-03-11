const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

// A schema method for comparing password input with that in the db
userSchema.methods.comparePassword = function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};



const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
