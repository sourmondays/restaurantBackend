const express = require('express');
const router = express.Router();

/* GET / */
router.get('/', (req, res) => {
	res.send({ status: 'success' });
});

router.use('/restaurant', require('./restaurantRoutes'));

router.use('/admin', require('./adminRoutes'));

module.exports = router;
