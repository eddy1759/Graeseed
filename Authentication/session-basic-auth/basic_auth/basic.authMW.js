const basicAuth = require('basic-auth');
const User = require('../userModel');

const authenticateUser = async (req, res, next) => {
    const credentials = basicAuth(req);
    if (!credentials ||!credentials.name || !credentials.pass) {
        res.set('WWW-Authenticate', 'Basic realm="Blog API"');
        return res.status(401).send("An error occured");
    }
    const user = await User.findOne({ username: credentials.name })
    if (!user) {
        res.set('WWW-Authenticate', 'Basic realm="Blog API"');
        return res.status(401).send("User Not found");
    }
    const match = user.comparePassword(credentials.pass);
    if (!match) {
        res.set('WWW-Authenticate', 'Basic realm="Blog API"');
        return res.status(401).send("Wrong password");
    }
    req.user = user;
    next();
};

module.exports = authenticateUser;