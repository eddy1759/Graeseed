const { Job } = require('bull');
const Book = require('../bookModel')

const searchJob = async (jobData) => {
    const { query } = jobData
    const queryRegex = new RegExp(query, 'i')
    const book = await Book.find({
        $or: [{ title: queryRegex }, {author: queryRegex}]
    })
    return books
}

module.exports = new Job('search', searchJob)