const { Worker } = require('bull')
const searchJob = require('./util/searchJob')

const searchQueue = new Worker('search', async (job) => {
    const result = await searchJob.process(job.data);
    return result
})

searchQueue.on('completed', (job, result) => {
    console.info(`Job ${job.id} completed with result: ${JSON.stringify(result)}`)
})

searchQueue.on('failed', (job, error) => {
    console.info(`Job ${job.id} failed with error: ${error}`);
})