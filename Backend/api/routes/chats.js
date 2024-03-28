const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Chat = require('../models/new');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Successfully gotten all chats',
        chats: items
    })
})

module.exports = router;