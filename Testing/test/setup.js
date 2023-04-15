const connectDB = require('../dbConfig')

module.exports = async () => {
  await connectDB();
};