/**
 * Restaurant routes
 */

const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/restaurant_controller');

/* Get all bookings */
router.get('/', bookingController.index);

/* Get a booking */
router.get('/:bookingId', bookingController.show);

/* Create a new booking */
router.post('/', bookingController.store);

/* Update a booking */
router.put('/:bookingId', bookingController.update);

/* Delete a booking */
router.delete('/:bookingId', bookingController.destroy);

module.exports = router;
