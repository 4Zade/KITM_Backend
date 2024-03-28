const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Back').then(console.log('MongoDB successfully connected'));

const NewRoutes = require('./api/routes/new');
const chatsRoutes = require('./api/routes/chats');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/new', NewRoutes);
app.use('/chats', chatsRoutes);

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