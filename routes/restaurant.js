/**
 * Restaurant routes
 */

const express = require('express');
const router = express.Router();
const tableController = require('../controllers/restaurant_controller');

/* Get all tables */
router.get('/', tableController.index);

/* Get a tables */
router.get('/:tableId', tableController.show);

/* Create a new table */
router.post('/', tableController.store);

/* Update a table */
router.put('/:tableId', tableController.update);

/* Delete a table */
router.delete('/:tableId', tableController.destroy);

module.exports = router;
