## Introduction to GraphQL
GraphQL is a query language and runtime for APIs that was developed by Facebook in 2012. It allows clients to specify the exact data they need and the shape of the response they want to receive. This makes it possible to reduce over-fetching and under-fetching of data, leading to more efficient and flexible APIs.

## Advantages of using GraphQL
Some of the advantages of using GraphQL include:

- Reduced network requests: Since clients can request only the data they need, there is no need for multiple round trips to the server to fetch related data.
- Strong typing: GraphQL schemas define the types of data that can be queried and returned, making it easy to catch errors before they happen.
- Flexibility: GraphQL APIs can evolve over time without breaking clients, since clients can specify the data they need and don't rely on the server to provide a fixed response structure.
- Tooling: GraphQL comes with powerful tooling, such as GraphiQL, which provides an interactive interface for exploring and testing GraphQL APIs.


### Getting Started

- `Clone` the repository and navigate to the project directory `cd GraphQl `.

- Run `npm install` to install all dependencies.

- Start the server `node index.js`.

- Open your browser and navigate to `http://localhost:3000/graphql`. You should see the GraphiQL interface, which is an interactive tool for testing GraphQL APIs.

- In the left-hand panel, type the following query: 
    - ``` 
        { 
            message 
        } 
    ```
- Then click the Play button `(the triangle button on the top left of the interface)`. You should see the response in the right-hand panel:
```
{
  "data": {
    "message": "Hello and Welcome to Graeseed learning"
  }
}

```

