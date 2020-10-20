const express = require('express');
const router = express.Router();
const { extractToken } = require('@permettezmoideconstruire/express-jwt');
const { validateJwtToken } = require('../controllers/middleware/auth');

router.use(extractToken());

/* GET / */
router.get('/', (req, res) => {
	res.send({ status: 'success' });
});

router.use('/adminbookings', [validateJwtToken], require('./adminRestaurantRoutes'));
router.use('/bookings', require('./bookingRoutes'))
router.use('/admin', require('./adminRoutes'));
router.use('/seats', [validateJwtToken], require('./seatsRoute'));

module.exports = router;
