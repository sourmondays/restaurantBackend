const express = require('express');
const router = express.Router();

/* GET / */
router.get('/', (req, res) => {
	res.send({ status: 'success' });
});


router.use('/booking', require('./restaurantRoutes'));
router.use('/admin', require('./adminRoutes'));
router.use('/seats', require('./seatsRoute'));

module.exports = router;
