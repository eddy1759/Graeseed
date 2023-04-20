<!-- About the Task -->

## Testing with Supertest and Jest

This project provides a basic example of how to test a bookstore API using Supertest and Jest

### Built With:

- Node.js
- Express.js
- MongoDB
- Supertest
- Jest


### Getting Started
<p>To get started, you will need to have Node.js installed on your computer.</p>

- `Clone` the repository and navigate to the project directory.

- Run `npm install` to install all dependencies.

- Create a `.env` file in the root directory of the project and add your MongoDB connection string as `MONGO_URI`.

#### Testing
- To run the tests, run `npm run test` in the project directory.


#### Test Coverage
<p>The project uses Jest to generate a coverage report. After running the tests, you can view the coverage report by opening coverage/lcov-report/index.html in a web browser.</p>

### API Endpoints
- POST /signup - create a new user
- POST /login - login a user
- POST /book - create a new book
- GET /books - get all books
- GET /book/:id - get a book by id
- PUT /book/update/:id - update a book by id
- DELETE /book/:id - delete a book by id
