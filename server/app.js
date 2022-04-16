const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./configs/db.config');

const indexRouter = require('./routes/index');
// const usersRouter = require('./routes/trend');
const marketRouter = require('./routes/market');
const cryptoRouter = require('./routes/singleCrypto');
const chartRouter = require('./routes/chart');

const app = express();
const cors = require('cors');
app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/TrendingCrypto', usersRouter(db));
app.use('/Market', marketRouter(db));
app.use('/crypto', cryptoRouter(db));
app.use('/chart', chartRouter(db));

console.log(`running on port`);
module.exports = app;