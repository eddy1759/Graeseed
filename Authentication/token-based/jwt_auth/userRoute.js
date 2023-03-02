const express = require('express');
const userModel = require('./userModel')
const { generateAuthToken, auth } = require('./auth')

const userRouter = express.Router();

// User registration
userRouter.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new userModel({ email, password });
        await user.save()
        const token = generateAuthToken(user)
        res.status(201).json({user, token})
    } catch (error) {
        // res.status(400).send(error)
        console.log(error)
    }
})

// User login
userRouter.post('/signin', async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({ email })
        if (!user) throw new Error('Invalid login credentials');
        const isPasswordValid = user.password === password
        if (!isPasswordValid) throw new Error('Invalid login credentials');
        const token = generateAuthToken(user)
        res.status(200).json({user, token})
    } catch (error) {
        console.log(error)
    }
})

userRouter.get('/user', async(req, res) => {
    const user = await userModel.find({})
    res.status(200).json(user)
})

// User profile
userRouter.get('/profile', auth, async (req, res) => {
    
    res.status(200).send(req.user);
});

module.exports = userRouter;