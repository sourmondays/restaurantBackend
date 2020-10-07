/**
 * Restaurant routes
 */

const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/restaurant_controller');

/* Get all tables */
router.get('/', bookingController.index);

/* Get a tables */
router.get('/:bookingId', bookingController.show);

/* Create a new table */
router.post('/', bookingController.store);

/* Update a table */
router.put('/:bookingId', bookingController.update);

/* Delete a table */
router.delete('/:bookingId', bookingController.destroy);

module.exports = router;
