const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Successfully created new chat',
        user: user
    })
})

module.exports = router;