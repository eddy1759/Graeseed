## Introduction to GraphQL
GraphQL is a query language and runtime for APIs that was developed by Facebook in 2012. It allows clients to specify the exact data they need and the shape of the response they want to receive. This makes it possible to reduce over-fetching and under-fetching of data, leading to more efficient and flexible APIs.

## Advantages of using GraphQL
Some of the advantages of using GraphQL include:

- Reduced network requests: Since clients can request only the data they need, there is no need for multiple round trips to the server to fetch related data.
- Strong typing: GraphQL schemas define the types of data that can be queried and returned, making it easy to catch errors before they happen.
- Flexibility: GraphQL APIs can evolve over time without breaking clients, since clients can specify the data they need and don't rely on the server to provide a fixed response structure.
- Tooling: GraphQL comes with powerful tooling, such as `GraphiQL`, which provides an interactive interface for exploring and testing GraphQL APIs.

### Building Blocks of a GraphQL API
- **Schema:** A GraphQL schema defines the types and fields that are available for clients to query and mutate data. It serves as a contract between the client and server, outlining what data can be accessed and how it can be manipulated.

- **TypeDef:** Type definitions (or typeDefs) are a way of defining the GraphQL schema using the GraphQL schema language. They define the types of data that can be queried or mutated and the fields that are available on those types.

- **Resolvers:** Resolvers are functions that resolve a GraphQL query or mutation by fetching data from a data source and returning the requested data. They are responsible for mapping the query to the corresponding data and can be used to retrieve data from a variety of sources such as a database or API.

- **Mutation:** A GraphQL mutation is a request to modify data on the server. It allows clients to make changes to data, such as creating, updating, or deleting records. Mutations are executed using the same syntax as queries, but they use the `mutation` keyword instead of `query.`

- **Query:** A GraphQL query is a request for data from the server. It specifies the fields that should be returned and any arguments that should be passed to the query. Queries are executed by sending a request to the server, which returns the requested data.