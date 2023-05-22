require('dotenv').config();
require('express-async-errors');

const express = require('express');

let rateLimiter = require('express-rate-limit');
let cors = require('cors');
let helmet = require('helmet');
let xss_clean = require('xss-clean');
let mongoSanitize = require('express-mongo-sanitize');
let cookieParser = require('cookie-parser');

const authRoute = require('./routes/authentication');
const userRoute = require('./routes/user');
const pageNotFoundError = require('./middlewares/page_not_found');
const errorHandler = require('./middlewares/error_handler');
const connectDb = require('./db/connect_db');

const app = express();

app.set('trust proxy', 1);
app.use(rateLimiter({
    windowMs : 15 * 60 * 1000,
    max : 60
}));
app.use(cors({
    origin: process.env.CLIENT,
    credentials: true,
}));
app.use(helmet());
app.use(xss_clean());
app.use(mongoSanitize());

app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.get('/', (req, res) => {
    res.status(200).json('welcome to port 5010');
})
app.use('/all_purpose_practice/authentication', authRoute);
app.use('/all_purpose_practice/user', userRoute);

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