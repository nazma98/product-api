const express = require('express')

const { logRequestMiddleware, errorHandler } = require('./middleware');
const { configureRouter } = require('./router');
const connectDB = require('../db');
const config = require('./config');

const port = config.PORT;

const app = express()

connectDB();

app.use(express.json())

app.use(logRequestMiddleware);

configureRouter(app);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

