const { ApolloServer, AuthenticationError } = require('apollo-server')

const connectDB = require('./config/db')
const typeDefs = require('./model/schema')
const resolvers = require('./resolvers')
const {verifyToken} = require('./utils/helper')

connectDB()

const server = new ApolloServer({
    typeDefs,
    resolvers,

    async context({ req }) {
        console.info(req.headers.authorization)
        const token = req.headers.authorization[1]
        if (!token) {
            throw new AuthenticationError('Authentication required');
        }
        const user = await verifyToken(token);
        return { user };
    }
})

server.listen()
    .then(({ url }) => console.log(`Server running at ${url}`));