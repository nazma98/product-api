const express = require('express')

const { logRequestMiddleware, errorHandler } = require('./middleware');
const { configureRouter } = require('./router');
const connectDB = require('./db');
const config = require('./config');
const { default: rateLimit } = require('express-rate-limit');

const limiter  = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 1000,
    standardHeaders: 'draft-8',
    legacyHeaders: false,
});

const port = config.PORT;

const app = express();

app.use(limiter);

connectDB();

app.use(express.json());

app.use(logRequestMiddleware);

configureRouter(app);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

