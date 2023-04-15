const Book = require("../../models/Books")
const User = require("../../models/User")
const request = require('supertest')
const app = require('../../app')
const connectDB = require('../../dbConfig')
const mongoose = require('mongoose')

const bookData = {
    title : 'Test Book 1',
    author: 'Test Author 1',
    year: 2019,
    price: 30
}

const userData = {
    username: "eddy",
    email: "eddy@mail.com", 
    password: "password1"
}


describe("Bookstore API", () => {
    beforeAll(async () => {
        await connectDB()
        await Book.deleteMany({});
        await User.deleteMany({});
    });


    afterAll(async () => {
        await User.deleteMany({});
        await Book.deleteMany({});
        await mongoose.connection.close();
    });


    describe('User Routes', () => {
        test('POST /signup should create a new user', async () => {
            const res = await request(app)
            .post("/user/signup")
            .send(userData)
            
            expect(res.status).toEqual(201);
            expect(res.body.status).toBe(true);
        });
    
        test('POST /login should log in an existing user', async () => {
            const res = await request(app)
            .post('/user/login')
            .send({
                username: 'eddy',
                password: 'password1',
            })
            expect(res.status).toEqual(200);
            expect(res.body.msg).toEqual('Login successful');
        });
    });


    describe('Book Routes', () => {
        test('POST /book should create a new book', async () => {
            const res = await request(app)
              .post('/book')
              .send(bookData)
      
            
            expect(res.status).toEqual(201)
            expect(res.body).toHaveProperty("book");
            expect(res.body.book.title).toEqual("Test Book 1")
            expect(res.body.book.author).toEqual("Test Author 1")
            expect(res.body.book.year).toEqual(2019)
        });

        test('GET /book should return all books', async () => {
            const res = await request(app).get('/book')

            expect(res.status).toEqual(200);
            expect(res.body).toHaveProperty("books")
            expect(res.body.books.length).toEqual(1);
        })
    })
})