const { parentPort, workerData } = require('worker_threads');

const Book = require('../bookModel')

parentPort.on('message', async (query) => {
    const queryRegex  = new RegExp(query, 'i');
    try {
        const books = await Book.find({ $or: [{ title: queryRegex  }, { author: queryRegex  }] }).maxTimeMS(20000);
        parentPort.postMessage({ books });
    } catch (error) {
        parentPort.postMessage({ error: error.message });
    }
});


// const searchWorkerThread = () => {
//     parentPort.on('message', async (query) => {
//       const queryRegex  = new RegExp(query, 'i');
//       try {
//         const books = await Book.find({ $or: [{ title: queryRegex  }, { author: queryRegex  }] }).lean();
//         parentPort.postMessage({ books });
//       } catch (error) {
//         parentPort.postMessage({ error: error.message });
//       }
//     });
//   }
  
//   module.exports = searchWorkerThread;