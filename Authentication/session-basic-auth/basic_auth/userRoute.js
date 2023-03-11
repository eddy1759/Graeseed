const express = require('express');
const userModel = require('../userModel')
const authenticateUser = require('./basic.authMW')


const userRouter = express.Router()

// Implement the sign-up route, which allows users to create a new account
userRouter.post('/signup', async (req, res) => {
    const { email, username, password } = req.body;
    try {
        // Create a new user object
        const user = await userModel.create({ email, username, password });
        // Send a success response
        res.status(201).json({
          msg: 'User created successfully',
          user
        });
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error');
    }
});
  
// Implement the sign-in route, which allows users to log in
userRouter.post('/login', authenticateUser, async (req, res) => {
    try {
        res.status(200).send('Authentication successful');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

userRouter.get('/users', async (req, res) => {
    const users = await userModel.find({})
    res.status(200).json({users})
})

module.exports = userRouter;