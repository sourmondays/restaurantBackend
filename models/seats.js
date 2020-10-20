/**
 * Seats, tables and booking times 
 */

const mongoose = require('mongoose');

// Booking Schema 
const SeatsSchema = new mongoose.Schema({
    maxSeats: Number,
    firstSeating: String,
    secoundSeating: String
}, {
    timestamps: true
})

// Booking model 
const Seats = mongoose.model('Seats', SeatsSchema);

// Export booking 
module.exports = Seats; 