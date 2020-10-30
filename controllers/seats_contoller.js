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
        res.status(200).send({
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
 * Create/update a new seating with max people
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

module.exports = {
    index,
    store,
}
