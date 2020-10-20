/**
 * Restaurant routes
 */

const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/admin_restaurant_controller');

/* Get all bookings */
router.get('/', bookingController.index);

/* Get a booking based on id */
router.get('/:bookingId', bookingController.show);

/* Get a booking based on date */
router.get('/date/:date', bookingController.showDate);

/* Get a booking based on date & time */
router.get('/date/:date/:time', bookingController.showDateTime);

/* Create a new booking */
router.post('/', bookingController.store);

/* Update a booking */
router.put('/:bookingId', bookingController.update);

/* Delete a booking */
router.delete('/:bookingId', bookingController.destroy);

module.exports = router;
