const Book = require('./model/Book')
const User = require('./model/User')


const resolvers = {
    Query: {
        getUsers: async () => {
            try {
                const users =  User.find()
                return users
            } catch (error) {
                console.error(error);
                throw error
            }
        },
        getBooks: async () => {
            try {
                const books = await Book.find()
                return books
            } catch (error) {
                console.error(error);
                throw error
            }
        },
        getBook: async (_, { id }) => {
            try {
                const book = await Book.findById(id);
                if (!book) {
                    throw new Error('Book not found')
                }
                return book
            } catch (error) {
                console.error(error)
                throw error
            }
        },
        getBooksByAuthor: async (_, { author }) => {
            try {
                const books = await Book.find({ author: author });
                return books;
            } catch (error) {
                console.error(error);
                throw error;
            }
        }
    },
    Mutation: {
        createBook: async (_, { input }) => {
            try {
                const book = new Book({
                    title: input.title,
                    author: input.author,
                    price: input.price,
                    yearPublished: input.yearPublished
                });
                const savedBook = await book.save()
                return savedBook;

            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        updateBook: async(_, { id, input }) => {
            try {
                const book = await Book.findById(id);
                if (!book) {
                    throw new Error('Book not found');
                 }
                book.title = input.title || book.title;
                book.author = input.author || book.author;
                book.price = input.price || book.price;
                book.yearPublished = input.yearPublished || book.yearPublished;
                const updatedBook = await book.save();
                return updatedBook;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        deleteBook: async (_, { id }) => {
            try {
              const book = await Book.findById(id);
              if (!book) {
                throw new Error('Book not found');
              }
              await book.remove();
              return book;
            } catch (error) {
              console.error(error);
              throw error;
            }
        },
        createUser: async (_, { input }) => {
            try {
                const user = new User({
                    username: input.username,
                    email: input.email,
                    password: input.password
                })
                const savedUser = await user.save()
                return savedUser
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        login: async (_, { email, password }) => {
            try {
                const user = await User.findOne({ email });
                if (!user) {
                    throw new Error('User not found');
                }
          
                const match = await user.comparePassword(password);
                if (!match) {
                    throw new Error('Invalid password');
                }
                return user
          
            } catch (error) {
              console.error(error);
              throw error;
            }
        },
    }
}

module.exports = resolvers