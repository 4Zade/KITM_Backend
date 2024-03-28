const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'login',
        user: user
    })
})

router.put('/:chat-id/reply', (res, req, next) => {
    res.status(200).json({
        message: 'Answer saved'
    })
})

router.get('/:chat-id', (res, req, next) => {
    res.status(200).json({
        message: 'Array of items'
    })
})

module.exports = router;