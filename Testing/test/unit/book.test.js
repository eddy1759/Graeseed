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


    describe('GET /books', () => {
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
            expect(res.body).toHaveProperty("books")
            expect(res.body.books.length).toEqual(3);
            expect(res.body.books[0].title).toEqual('Test Book 1');
            expect(res.body.books[1].title).toEqual('Test Book 2');
            expect(res.body.books[2].title).toEqual('Test Book 3');
        });
    });


    describe('GET /book/:id', () => {
        it('should get a single book by id', async () => {
            const newbook = new book(bookData)
            await newbook.save()
    
            const res = await request(app).get(`/book/${newbook._id}`);
    
            expect(res.status).toEqual(200);
            expect(res.body).toHaveProperty("book")
            expect(res.body.book.title).toEqual('Test Book 1');
            expect (res.body.book.author).toEqual('Test Author 1');
            expect(res.body.book.year).toEqual(2019)
            expect(res.body.book.price).toEqual(30);
        });

        it('should return 404 if book not found', async () => {
            const id = '609d4fc59ab8c809a82a3b3a';
          
            const res = await request(app).get(`/book/${id}`);
          
            expect(res.status).toEqual(404);
            expect(res.body.msg).toEqual('Book not found');
        });
    })


    describe('PUT /book/update/:id', () => {
        it('should update a book', async () => {
            const newbook = new book(bookData)
            await newbook.save();

            const update = {
                title: 'Updated Book',
                author: 'Updated Author',
                year: 2020,
                price: 20
            };
          
            const res = await request(app).put(`/book/update/${newbook._id}`).send(update);
          
            expect(res.status).toEqual(200);
            expect(res.body.book.title).toEqual('Updated Book');
            expect(res.body.book.author).toEqual('Updated Author');
            expect(res.body.book.year).toEqual(2020);
            expect(res.body.book.price).toEqual(20);
        });
          
        it('should return 404 if book not found', async () => {
            const id = '609d4fc59ab8c809a82a3b3a';
          
            const update = {
              title: 'Updated Book',
              author: 'Updated Author',
              price: 20,
            };
          
            const res = await request(app).put(`/book/update/${id}`).send(update);
          
            expect(res.statusCode).toEqual(404);
            expect(res.body.msg).toEqual('Book not found');
        });
          
    })

})