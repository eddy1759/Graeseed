const express = require('express');
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')


const schema = buildSchema(`
    type Query {
        message: String
    }
`);

const root = {
    message: () => 'Hello and Welcome to Graeseed learning'
}

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000, () => console.log('Server is running on port 3000'))