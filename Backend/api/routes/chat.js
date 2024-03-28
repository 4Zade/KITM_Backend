const express = require('express');
const router = express.Router();

router.post('/:chat-id/reply', (req, res, next) => {
    res.status(200).json({
        message: 'Successfully replied',
    })
})

router.get('/:chat-id', (req, res, next) => {
    res.status(200).json({
        message: 'Successfully gotten chat'
    })
})

module.exports = router;