const express = require('express')
const { Queue, Job } = require('bull')
const searchJob = require('./workers/searchJob')
const { getAllBooks, getBookById, addBook, updateBook, deleteBook } = require('./bookController')

const bookRouter = express.Router()
const searchQueue = new Queue('search');

bookRouter.get('/', getAllBooks)
bookRouter.get('/:id', getBookById)
bookRouter.post('/', addBook)
bookRouter.put('/:id', updateBook)
bookRouter.delete('/:id', deleteBook)


bookRouter.get('/search', async (req, res) => {
    const query = req.query.q
    const job = await searchQueue.add({query})
    res.json({ jobId: job.id })
})

bookRouter.get('/:jobId', async (req, res) => {
    const jobId = req.params.jobId;
    const job = await Job.fromId(searchQueue, jobId);
    if (job) {
      res.json({ status: job.status, result: job.returnvalue });
    } else {
      res.status(404).json({ message: `Job ${jobId} not found` });
    }
});

module.exports = bookRouter