const express = require('express');
const Post = require('./postModel');
const authenticateUser = require('./basic.authMW')

const postRouter = express.Router();



postRouter.post('/posts', authenticateUser, async(req, res) => {
    const { title, content, author } = req.body;
    try {
        if (!title || !content || !author) {
            return res.status(404).send("Missing body! title, content and author required")
        }
        const post = await Post.create({ title, content, author })
        if (!post) {
            return res.status(400).send("An error occurred, trying to save post")
        }
        res.status(201).json({ message: 'Post created successfully' })
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
})


postRouter.get('/posts', async (req, res) => {
    try {
        const posts = await Post.find({})
        res.status(200).json({posts})
    } catch (error) {
        res.status(500).json({ error: err.message })
    }
})

module.exports = postRouter;