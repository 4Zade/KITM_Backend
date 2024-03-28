const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const LoginRoutes = require('./api/routes/login');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/login', LoginRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status(404);
    next(error);
});
app.use((error, res, req, next) => {
    res.status(err.status)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app;