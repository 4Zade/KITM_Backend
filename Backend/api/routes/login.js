const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    res.status(200).json({
        message: 'login',
        user: user
    })
})

module.exports = router;