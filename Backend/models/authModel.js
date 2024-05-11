const mongoose = require('mongoose');

const authSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    },
    date: {
        type: Date,
        default: Date.now
    },
    boards: {
        type: Array,
        default: []
    },
    lists: {
        type: Array,
        default: []
    },
    cards: {
        type: Array,
        default: []
    },
    boardOrder: {
        type: Array,
        default: []
    },
    listOrder: {
        type: Array,
        default: []
    },
    cardOrder: {
        type: Array,
        default: []
    },
    cardComments: {
        type: Array,
        default: []
    },
    cardLabels: {
        type: Array,
        default: []
    },
    cardMembers: {
        type: Array,
        default: []
    },
    cardDueDates: {
        type: Array,
        default: []
    },
});

module.exports = mongoose.model('User', authSchema);