const jwt = require('jsonwebtoken')
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')})

const generateToken = (user) => {
    const payload = {
        id: user.id,
        email: user.email
    }

    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1d' })
}

const verifyToken = (token) => {
    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        return payload
    } catch (error) {
       console.error(error)
       throw new Error('Invalid token')
    }
}

module.exports = {
    generateToken,
    verifyToken
}