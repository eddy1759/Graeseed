### Getting Started

- `Clone` the repository and navigate to the project directory `cd GraphQl/lession1`.

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

