/**
 * Booking model
 */

const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

// Booking Schema 
const BookingSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
    },
    slug: {
        type: String,
        slug: 'firstName',
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 15,
    },
    email: {
        type: String,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
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
        required: true
    }
}, {
    timestamps: true
})


// Booking model 
const Booking = mongoose.model('Booking', BookingSchema);

// Export booking 
module.exports = Booking; 