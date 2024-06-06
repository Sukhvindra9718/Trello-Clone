const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    cardTitle: {
        type: String,
        required: true,
    },
    cardOrder: {
        type: Number,
        required: true
    },
    cardDescription: {
        type: String,
        default: ''
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
        type: Date,
        default: null
    },
    cardAttachments: {
        type: Array,
        default: []
    },
    notificationAccess:{
        type: Boolean,
        default: false
    },
    list: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    },
});

module.exports = mongoose.model('Card', cardSchema);