/**
 * Seats and time routes 
 */

const express = require('express');
const router = express.Router();
const seatsController = require('../controllers/seats_contoller');

/* Get seating */
router.get('/', seatsController.index);

/* Create/update a new seating with max people */
router.post('/', seatsController.store);

module.exports = router; 