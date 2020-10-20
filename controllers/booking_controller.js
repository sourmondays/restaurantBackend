/**
 * Booking Controller 
 */

const debug = require('debug')('BackendRestaurant:restaurant-controller')
const models = require('../models');
const mongoose = require('mongoose');

/**
 * Get all booking
 *
 * GET / This one is for the admin, to see who reserved a table.
 */
const index = async (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method Not Allowed.',
    });
}

/**
 * Get a booking based on id
 *
 * GET /:bookingId / This one is for the admin, to see a specific reservation.
 */
const show = async (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method Not Allowed.',
    });
}

/**
 * Get a booking based on date 
 *
 * GET /:date / This one is for the admin, to see a specific reservation on a specific date.
 */
const showDate = async (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method Not Allowed.',
    });
}

/**
 * Get a booking based on date & time
 *
 * GET /:date / This one is for the admin, to see a specific reservation on a specific date and time.
 */
const showDateTime = async (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method Not Allowed.',
    });
}

/**
 * Create a new booking
 *
 * POST / This one is for a customer that want to make a reservation at the restaurant.
 */
const store = async (req, res) => {
    debug('New reservation created: %j', req.body);
    const booking = new models.Booking({
        _id: new mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        noPersons: req.body.noPersons,
        date: Date.parse(req.body.date),
        time: req.body.time
    });
    booking
        .save()
        .then(bookings => {
            console.log(bookings);
            res.status(201).send({
                status: 'success',
                data: {
                    bookings
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).send({
                status: 'error',
                error: err
            });
        });
}

/**
 * Update a booking
 *
 * PUT /:bookingId / This one is for the admin, to update/change a already existing reservation. 
 */
const update = async (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method Not Allowed.',
    });
}

/**
 * Delete a booking
 *
 * DELETE /:bookingId / This one is for the admin, to delete a already existing reservation.
 */
const destroy = async (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method Not Allowed.',
    });
}

module.exports = {
    index,
    show,
    store,
    showDate,
    showDateTime,
    update,
    destroy,
}
