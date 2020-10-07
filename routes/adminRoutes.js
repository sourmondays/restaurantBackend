/**
 * Admin routes
 */

const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin_controller');

/* Get all admins */
router.get('/', adminController.index);

/* Get a admin */
router.get('/:adminId', adminController.show);

/* Create a new admin */
router.post('/', adminController.store);

/* Update a admin */
router.put('/:adminId', adminController.update);

/* Delete a admin */
router.delete('/:adminId', adminController.destroy);

module.exports = router; 