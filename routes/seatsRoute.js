/**
 * Seats and time routes 
 */

const express = require('express');
const router = express.Router();
const seatsController = require('../controllers/seats_contoller');

/* Get all admins */
router.get('/', seatsController.index);

/* Make a post to login admin */
router.post('/', seatsController.store);

/* Update a admin */
router.put('/:seats', seatsController.update);

/* Delete a admin */
router.delete('/:seatId', seatsController.destroy);

module.exports = router; 