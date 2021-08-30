const mongoose = require('mongoose')

const foodsSchema = new mongoose.Schema({
    food_id:{
        type: String,
        unique: true,
        required: true
    },
    sold: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        trim: true
    },
    description: {
        type: String,
    },
    ingredients: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String
    },
    status: {
        type: String,
        require: true
    },
    images: {
        type: Object,
    } 
}, {
    timestamps: true
})

module.exports = mongoose.model("Food", foodsSchema)