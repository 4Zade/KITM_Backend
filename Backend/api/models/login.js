const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const loginSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: String,
    password: String
})

module.exports = mongoose.model('Login', loginSchema);