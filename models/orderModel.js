const mongoose = require ('mongoose');

const orderSchema = new mongoose.Schema({
    order_id: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    images: {
        type: Object,
        // required: true
    },
    price: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        default: 'Not-Confirmed'
    }
})

module.exports = mongoose.model("Orders", orderSchema)