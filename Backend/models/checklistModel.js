const mongoose = require('mongoose');

const checklistSchema = new mongoose.Schema({
    checklistTitle: {
        type: String,
        required: true
    },
    checklistItems: {
        type: Array,
        default: []
    },
    checkListDueDate: {
        type: Date,
        default: null
    },
    checkListMembers: {
        type: Array,
        default: []
    },
    card: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card'
    },
});

module.exports = mongoose.model('Checklist', checklistSchema);