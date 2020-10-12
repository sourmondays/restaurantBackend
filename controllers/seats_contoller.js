/**
 * Seats Controller 
 */

const models = require('../models');

/**
 * Get all seatings
 *
 * GET /
 */
const index = async (req, res) => {
    models.Seats.find().exec().then(seats => {
        console.log(seats);
        res.status(201).send({
            status: 'success',
            data: {
                seats
            }
        })
    }).catch(err => {
        console.log(err);
        res.status(500).send({
            status: 'error',
            error: err
        });
    })
}

/**
 * Get a seating
 *
 * GET /:seatingId
 */
const show = async (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method Not Allowed.',
    });
}

/**
 * Create a new seating with max people
 *
 * POST /
 */
const store = async (req, res) => {
    models.Seats.updateOne(req.body)
        .then(seats => {
            res.status(201).send({
                status: 'success',
                data: {
                    seats
                }
            })
        })
        .catch((err) => {
            console.log(err)
        })
}


/**
 * Update a seating
 *
 * PUT /:seatsId
 */
const update = async (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method Not Allowed.',
    });
}

/**
 * Delete a seat
 *
 * DELETE /:seatId
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
    update,
    destroy,
}
