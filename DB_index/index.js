const express = require('express');
const CONFIG = require('./Config/config')

const app = express();
const routes = require('./routes/indexRouter');

app.use(express.json());
app.use('/api', routes);

const PORT = CONFIG.PORT

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));