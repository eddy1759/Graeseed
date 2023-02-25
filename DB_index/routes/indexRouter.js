const express = require('express');
const router = express.Router();
const { createPostgreSQLIndex, createMongoDBIndex } = require('../controller/idxController');

router.post('/postgreSQL/index', createPostgreSQLIndex);
router.post('/mongoDB/index', createMongoDBIndex);

module.exports = router;