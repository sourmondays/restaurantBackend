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
		res.status(201).send({
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
 * Get a booking
 *
 * GET /:bookingId / This one is for the admin, to see a specific reservation.
 */
const show = async (req, res) => {
	const id = req.params.bookingId;
	models.Booking.findById(id)
		.exec()
		.then(booking => {
			console.log("DB", booking);
			if (booking) {
				res.status(201).send({
					status: 'success',
					data: {
						booking
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
		date: req.body.date,
		time: req.body.time
	});
	booking
		.save()
		.then(booking => {
			console.log(booking);
			res.status(201).send({
				status: 'success',
				data: {
					booking
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
		const booking = await models.Booking.findOneAndUpdate(req.params.bookingId, req.body, { new: true });

		if (!booking) {
			res.sendStatus(404);
			return;
		}

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

		if (!booking) {
			res.sendStatus(404);
			return;
		}

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
