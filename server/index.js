require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const pageNotFoundError = require('./middlewares/page_not_found');
const errorHandler = require('./middlewares/error_handler');
const connectDb = require('./db/connect_db');

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).json('welcome to port 5010');
})

app.use(pageNotFoundError);
app.use(errorHandler);

const port = process.env.PORT || 5005;

async function start() {
    try {
        await connectDb(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
}

start();