const { Worker } = require('worker_threads');
// const searchWorkerThread = require('./searchWorkerThread');

module.exports = class SearchWorker {
  constructor() {
    this.worker = new Worker('./workers/searchWorkerThread.js');
  }

  search(query) {
    return new Promise((resolve, reject) => {
      this.worker.postMessage(query);
      this.worker.on('message', resolve);
      this.worker.on('error', reject);
      this.worker.on('exit', (code) => {
        if (code != 0) {
          reject(new Error(`Worker stopped with exit code ${code}`))
        }
      })
    })
  }
}
