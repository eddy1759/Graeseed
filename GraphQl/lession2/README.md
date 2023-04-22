### Getting Started

- `Clone` the repository and navigate to the project directory `cd GraphQl/lession2`.

- Run `npm install` to install all dependencies.

- Start the server `node index.js`.

- Open your browser and navigate to `http://localhost:3000/graphql`. You should see the GraphiQL interface, which is an interactive tool for testing GraphQL APIs.

- In the left-hand panel, type the following query: 
    - ``` 
        query {
            users {
                id
                name
                age
            }
        }
    ```
- Then click the run button, You should see the list of users with their IDs, names, and ages.
- Also, to create a new user, type the following query:
    - ```
        mutation {
            createUser(name: "Dave", age: 40) {
            id
            name
            age
        }
    }
    ```
You should see the new user with the ID, name, and age you provided.


