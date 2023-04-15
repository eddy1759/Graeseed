const book = require("../../models/Books")
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

describe('Book API', () => {

    beforeAll(async () => {
        await connectDB()
    });

    afterEach(async () => {
        await book.deleteMany({});
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    describe('POST /book', () => {
        it('should create a book', async () => {
            const res = await request(app)
            .post('/book')
            .set("Content-Type", "application/json")
            .send(bookData)

            expect(res.status).toEqual(201)
            expect(res.body).toHaveProperty("book")
            expect(res.body.book).toHaveProperty('title')
            expect(res.body.book.title).toEqual("Test Book 1")
            expect(res.body.book).toHaveProperty('author')
            expect(res.body.book.author).toEqual("Test Author 1")
            expect(res.body.book).toHaveProperty("year")
            expect(res.body.book.year).toEqual(2019)
        })
    })


    describe('GET /api/books', () => {
        it('should get all books', async () => {
            const book1 = new book(bookData) 

            const book2 = new book({
                title: 'Test Book 2',
                author: 'Test Author 2',
                year: 2013,
                price: 10
            });
    
            const book3 = new book({
                title: 'Test Book 3',
                author: 'Test Author 3',
                year: 2010,
                price: 20,
            });
    
            await book1.save();
            await book2.save();
            await book3.save();
    
            const res = await request(app).get('/book')
            .set("Content-Type", "application/json");
    
            expect(res.status).toEqual(200);
            expect(res.body.length).toEqual(3);
            expect(res.body).toHaveProperty("books")
            expect(res.body[0].books.title).toEqual('Test Book 1');
            expect(res.body[1].books.title).toEqual('Test Book 2');
            expect(res.body[2].books.title).toEqual('Test Book 3');
        });
    });

})