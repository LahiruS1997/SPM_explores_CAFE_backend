const mongoose = require('mongoose')

const employeeSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        trim: true
    },
    designation: {
        type: String,
        required: true
    }, 
    email: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: Number,
        required: true
    }, 
    dateOfBirth: {
        type: Date,
        required: true
    }, 
    gender: {
        type: String,
        required: true
    }, 
    emergencyPhone: {
        type: String,
        required: true
    }, 
    hireDate: {
        type: Date,
        required: true
    }, 
    dutyType: {
        type: String,
        required: true
    }, 
    role: {
        type: Number,
        default: 0
    },
    userName: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Employee', employeeSchema)
