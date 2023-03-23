const { auth } = require('express-openid-connect')
const path = require('path')
require('dotenv').config({path: path.resolve(__dirname, '../.env')})



const auth0Config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_SECRET,
    baseURL: process.env.AUTH0_BASE_URL,
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL
}

module.exports = auth(auth0Config)