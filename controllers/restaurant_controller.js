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
	}
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
			message: error.message
		});
	}
}

/**
 * Update a booking
 *
 * PUT /:bookingId
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
 * DELETE /:bookingId
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
