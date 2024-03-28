const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Chat = require('../models/new');

router.post('/', (req, res, next) => {
    const newChat = new Chat({
        _id: new  mongoose.Types.ObjectId(),
        questions: [],
        answers: [],
    });
    newChat.save()
    res.status(201).json({
        message: 'Successfully created new chat',
        user: newChat
    });
});

module.exports = router;