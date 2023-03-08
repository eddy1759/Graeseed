const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
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

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
