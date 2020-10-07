/**
 * Restaurant Controller 
 */

const models = require('../models');

/**
 * Get all booking
 *
 * GET /
 */
const index = async (req, res) => {
	try {
		const bookings = await models.Booking.find();

		res.send({
			status: 'success',
			data: {
				bookings,
			}
		})
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exeption thrown when trying to get all booking.'
		});
	}
}

/**
 * Get a booking
 *
 * GET /:bookingId
 */
const show = async (req, res) => {
	res.status(405).send({ status: 'fail', message: 'Method Not Implemented.' });
}

/**
 * Create a new booking
 *
 * POST /
 */
const store = async (req, res) => {
	try {
		const booking = await new models.Booking(req.body).save();
		res.status(201).send({
			status: 'success',
			data: {
				booking,
			}
		})
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: 'Exeption thrown when trying to create new booking.'
		});
	}
}

/**
 * Update a booking
 *
 * PUT /:bookingId
 */
const update = async (req, res) => {
	res.status(405).send({ status: 'fail', message: 'Method Not Implemented.' });
}

/**
 * Delete a booking
 *
 * DELETE /:bookingId
 */
const destroy = async (req, res) => {
	res.status(405).send({ status: 'fail', message: 'Method Not Implemented.' });
}

module.exports = {
	index,
	show,
	store,
	update,
	destroy,
}
