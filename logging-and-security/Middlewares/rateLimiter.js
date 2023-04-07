const rateLimit = require('express-rate-limit')

const limiter = rateLimit({
    windowMs: 15 * 60 * 100, // 15 minutes
    max: 10, //Limit each IP to 20 request per window (per 20 minutes)
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    message: "Too many request, please try again later"
})

module.exports = limiter