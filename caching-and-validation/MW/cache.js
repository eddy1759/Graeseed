const redis = require('ioredis');
const CONFIG = require('../config/config').REDIS

const client = redis.createClient({
    host: CONFIG.host,
    port: CONFIG.port,
    password: CONFIG.password
})
client.on('error', (error) => {
    console.error(error);
});
client.on('connected', () => {
    console.log('Redis client has connected');
});
client.on('end', () => {
    console.log('Redis client disconnected');
});


const cacheMW = (req, res, next) => {
    const bookId = req.params.id;
    client.get(bookId, (error, data) => {
      if (error) throw error;
      if (data != null) {
        res.send(JSON.parse(data));
      } else {
        next();
      }
    });
};


module.exports = {
    client,
    cacheMW
}
