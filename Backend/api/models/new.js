const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const chatSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    questions: Array,
    answers: Array,
})

module.exports = mongoose.model('Chat', chatSchema);