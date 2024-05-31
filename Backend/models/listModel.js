const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    listTitle: {
        type: String,
        required: true
    },
    listOrder: {
        type: Number,
        required: true
    },
    board: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board'
    },
});

module.exports = mongoose.model('List', listSchema);