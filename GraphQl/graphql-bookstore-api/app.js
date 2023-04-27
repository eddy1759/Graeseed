const { ApolloServer } = require('apollo-server')
const cors = require('cors')

const connectDB = require('./config/db')
const typeDefs = require('./model/schema')
const resolvers = require('./resolvers')

connectDB()

const server = new ApolloServer({
    typeDefs,
    resolvers,

    // add cors middleware
    cors: {
        origin: '*', // set the allowed origins to all origins
        // credentials: true // enable sending credentials (e.g., cookies)
    }
})
  

server.listen()
    .then(({ url }) => console.log(`Server running at ${url}`));