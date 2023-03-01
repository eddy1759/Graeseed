const dotenv = require('dotenv');
dotenv.config({ path: 'C:\Users\eddy\Documents\Graeseed\Authentication\.env' });

const CONFIG = {
    PORT: process.env.PORT ||3000,
    DB: process.env.DB,
    SECRET: process.env.JWT_SECRET
}

module.exports = CONFIG;
