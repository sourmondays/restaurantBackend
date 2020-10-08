/**
 * Booking model
 */

const mongoose = require('mongoose');

// Booking Schema 
const BookingSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
    },
    phone: {
        type: Number,
        required: true,
        minlength: 5,
        maxlength: 15,
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
    },
    noPersons: {
        type: Number,
        required: true,
        min: 1,
        max: 6,
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    time: {
        type: String,
        required: true,
    }
});

// Booking model 
const Booking = mongoose.model('Booking', BookingSchema);

// Export booking 
module.exports = Booking; 