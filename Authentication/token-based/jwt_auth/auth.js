const jwt = require('jsonwebtoken')
const userModel = require('./userModel')
require('dotenv').config({path: "./.env"})

const JWT_SECRET = process.env.JWT_SECRET || 'my secret'


function generateAuthToken(user) {
    const payload = { userId: user._id };
    const options = { expiresIn: '1h' };
    const token = jwt.sign(payload, JWT_SECRET, options);
    return token;
}


const auth = async(req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, JWT_SECRET)
        const user = await userModel.findById(decode.userId)
        if (!user) {
            throw new Error('Unauthorized')
        }
        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    generateAuthToken,
    auth
}