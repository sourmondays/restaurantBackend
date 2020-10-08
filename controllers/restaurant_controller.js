/**
 * Restaurant Controller 
 */

const debug = require('debug')('BackendRestaurant:restaurant-controller')
const models = require('../models');
const booking = require('../models/booking');


/**
 * Get all booking
 *
 * GET / This one is for the admin, to see who reserved a table.
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
 * GET /:bookingId / This one is for the admin, to see a specific reservation.
 */
const show = async (req, res) => {
	try {
		const booking = await models.Booking.findById(req.params.bookingId);

		// Have to change this one later on...
		if (!booking) {
			res.sendStatus(404);
			return;
		}
		// Until here 

		res.send({
			status: 'success',
			data: {
				booking,
			}
		})
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: error.message
		});
		throw error;
	}
}

/**
 * Create a new booking
 *
 * POST / This one is for a customer that want to make a reservation at the restaurant.
 */
const store = async (req, res) => {
	try {
		const booking = await new models.Booking(req.body).save();
		debug('New reservation created: %j', req.body);

		res.status(201).send({
			status: 'success',
			data: {
				booking,
			}
		})
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: error.message
		});
	}
}

/**
 * Update a booking
 *
 * PUT /:bookingId / This one is for the admin, to update/change a already existing reservation. 
 */
const update = async (req, res) => {
	try {
		const booking = await models.Booking.findByIdAndUpdate(req.params.bookingId, req.body, { new: true });

		// Have to change this one later on...
		if (!booking) {
			res.sendStatus(404);
			return;
		}
		// Until here 

		res.send({
			status: 'success',
			data: {
				booking,
			}
		})
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: error.message
		});
	}
}

/**
 * Delete a booking
 *
 * DELETE /:bookingId / This one is for the admin, to delete a already existing reservation.
 */
const destroy = async (req, res) => {
	try {
		const booking = await models.Booking.findByIdAndRemove(req.params.bookingId);

		// Have to change this one later on...
		if (!booking) {
			res.sendStatus(404);
			return;
		}
		// Until here 

		res.send({
			status: 'success',
			data: {
				booking,
			}
		})
	} catch (error) {
		res.status(500).send({
			status: 'error',
			message: error.message
		});
	}
}

module.exports = {
	index,
	show,
	store,
	update,
	destroy,
}
