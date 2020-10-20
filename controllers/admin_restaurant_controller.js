/**
 * Restaurant Controller 
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
	models.Booking.find().exec().then(bookings => {
		console.log(bookings);
		res.status(200).send({
			status: 'success',
			data: {
				bookings
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
 * Get a booking based on id
 *
 * GET /:bookingId / This one is for the admin, to see a specific reservation.
 */
const show = async (req, res) => {
	const id = req.params.bookingId;
	models.Booking.findById(id)
		.exec()
		.then(bookings => {
			console.log("DB", bookings);
			if (bookings) {
				res.status(200).send({
					status: 'success',
					data: {
						bookings
					}
				})
			} else {
				res.status(404).send({
					status: 'error',
					message: "Reservation with this id dosn't exist."
				});
			}
		})
		.catch(err => {
			console.log(err);
			res.status(500).send({
				status: 'error',
				message: "Id dosn't match, invalid ObjectId.",
				error: err
			});
		});
}

/**
 * Get a booking based on date 
 *
 * GET /:date / This one is for the admin, to see a specific reservation on a specific date.
 */
const showDate = async (req, res) => {
	models.Booking.find({
		"date": req.params.date
	}).then(bookings => {
		console.log('Booking ', bookings)
		res.status(200).send({
			status: 'success',
			data: {
				bookings
			}
		})
	}).catch(err => {
		res.status(500).send({
			status: 'error',
			message: "There are no booking formatted this way, try search for YYYY-MM-DD.",
			error: err,
		})
	})
}

/**
 * Get a booking based on date & time
 *
 * GET /:date / This one is for the admin, to see a specific reservation on a specific date and time.
 */
const showDateTime = async (req, res) => {
	models.Booking.find({ date: req.params.date, time: req.params.time }).then(bookings => {
		console.log('Booking ', bookings)
		res.status(200).send({
			status: 'success',
			data: {
				bookings
			}
		})
	}).catch(err => {
		res.status(500).send({
			status: 'error',
			message: "There are no booking formatted this way, try search for YYYY-MM-DD/00:00.",
			error: err,
		})
	})
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
	try {
		const bookings = await models.Booking.findOneAndUpdate(req.params.bookingId, req.body, { new: true });

		if (!bookings) {
			res.sendStatus(404);
			return;
		}

		res.send({
			status: 'success',
			data: {
				bookings,
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
		const bookings = await models.Booking.findByIdAndRemove(req.params.bookingId);

		if (!bookings) {
			res.sendStatus(404);
			return;
		}

		res.send({
			status: 'success',
			data: {
				bookings,
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
	showDate,
	showDateTime,
	update,
	destroy,
}
