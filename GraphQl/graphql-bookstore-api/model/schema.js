const { gql } = require('apollo-server')


const typeDefs = gql`
    type User {
        id: ID!
        username: String!
        email: String!
        password: String!
    }

    type Book {
        id: ID!
        title: String!
        author: String!
        price: Float!
        yearPublished: Int!
    }

    type Query {
        getUsers: [User!]!
        getBook(id: ID!): Book
        getBooks: [Book!]!
        getBooksByAuthor(author: String!): [Book]!
    }

    type Mutation {
        createUser(username: String!, email: String!, password: String!): User!
        createBook(title: String!, author: String!, price: Float!, yearPublished: Int!): Book!
        updateBook(id: ID!, title: String!, author: String!, price: Float!, yearPublished: Int!): Book!
        deleteBook(id: ID!): Book!
        login(email: String!, password: String!): Token!
    }

    type Token {
        token: String!
    }
`;
module.exports = typeDefs;