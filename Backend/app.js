const express = require('express');
const app = express();
const morgan = require('morgan');

const LoginRoutes = require('./api/routes/login');

app.use(morgan('dev'));

app.use('/login', LoginRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error);
});
app.use((error, res, req, next) => {
    res.status(err.status)
})

module.exports = app;