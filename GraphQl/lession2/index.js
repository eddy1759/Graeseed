const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const jsonfile = require('jsonfile');

// Read data from file
const data = jsonfile.readFileSync('data.json')

// GraphQL schema
const typeDefs = gql`
    type Query {
        users: [User!]!
    }

    type Mutation {
        createUser(name: String!, age: Int!): User!
    }

    type User {
        id: ID!
        name: String!
        age: Int!
    }
`;

// GraphQL resolver
const resolvers = {
    Query: {
        users: () => data.users,
    },
    Mutation: {
        createUser: (parent, args) => {
            const id = data.users.length + 1;
            const newUser = { id, ...args };
            jsonfile.writeFileSync('data.json', data)
            return newUser;
        }
    }
};

// Apollo Server
const server = new ApolloServer({ typeDefs, resolvers})

// Express app
const app = express()

// Start server
async function startServer() {
    await server.start();
    console.log('Server started on http://localhost:3000/graphql');
}

startServer().then(() => {
    // Apply middleware
    server.applyMiddleware({ app });
    
    // Start server
    app.listen(3000, () => {
        console.log('Server listening on port 3000');
    });
}).catch((err) => {
    console.error(err);
});
