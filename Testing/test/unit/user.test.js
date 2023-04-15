const User = require('../../models/User')
const request = require('supertest')
const app = require('../../app')
const connectDB = require('../../dbConfig')
const mongoose = require('mongoose')

const data = {
    username: "eddy",
    email: "eddy@mail.com", 
    password: "password1"
}



describe('USER API /user', () => {

    beforeAll(async () => {
        await connectDB();
    });
    
    // afterEach(async () => {
    //     await User.deleteMany({});
    // });
    
    afterAll(async () => {
        await mongoose.connection.close();
    });

    describe('testing user /user', () => {
        it('it should create a new user', async () => {

            const res = await request(app).post("/user/signup").set("Content-Type", "application/json").send(data)
            expect(res.status).toEqual(201);
            expect(res.body.status).toBe(true);
            expect(res.body).toHaveProperty("msg");
            expect(res.body.msg).toEqual('User registered successfully')
        });


        it('should return 400 if email already exists', async () => {
            const res = await request(app)
            .post("/user/signup").set("Content-Type", "application/json")
            .send(data);
    
            expect(res.status).toEqual(400);
            expect(res.body.msg).toEqual('User already exists');
        });


        it('should login a user', async () => {
            const res = await request(app).post('/user/login').set("Content-Type", "application/json").send({
                username: 'eddy',
                password: 'password1',
            });
    
            expect(res.status).toEqual(200);
            expect(res.body.msg).toEqual('Login successful');
            expect(res.body).toHaveProperty("user")
            expect(res.body.user).toHaveProperty("username", "eddy")
            expect(res.body.user).toHaveProperty("email", "eddy@mail.com")
        });
    });
})

