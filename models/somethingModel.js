const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const something = new Schema({

    something_id: {
        type: String,
        required: true
    },
    somethingName: {
        type: String,
        required: true
    },
    someCount: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
})
module.exports = mongoose.model('Something', something)