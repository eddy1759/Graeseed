const express = require('express');
const userModel = require('../userModel');

const userRouter = express.Router()

// User registration
userRouter.post('/signup', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = new userModel({ email, password });
        await user.save()
        req.session.userId = user._id;
        res.status(201).json({
            status: true,
            msg: "Registration Successful",
            user
        })
    } catch (error) {
        // res.status(400).send(error)
        console.error(error)
    }
})

userRouter.post('/login', async (req, res) => {
    const {email, password} = req.body
    try {
        const user = await userModel.findOne({email})
        if (!user) {
            return res.status(401).send('Invalid email or password')
        }
        req.session.userId = user._id;
        res.status(200).json({
            status: true,
            msg: "Successfully logged in",
            user
        })
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error');
    }
})


userRouter.get('/profile', async (req, res) => {
    try {
        const user = await userModel.findById(req.session.userId);
        if (!user) {
        return res.status(401).send('Not authenticated');
        }
        res.status(200).send(user);
    } catch (error) {
        console.log(error)
    }
});

module.exports = userRouter;

