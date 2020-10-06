/**
 * Restaurant Controller 
 */

const models = require('../models');

/**
 * Get all tables
 *
 * GET /
 */
const index = async (req, res) => {
	res.status(405).send({ status: 'fail', message: 'Method Not Implemented.' });
}

/**
 * Get a table
 *
 * GET /:tableId
 */
const show = async (req, res) => {
	res.status(405).send({ status: 'fail', message: 'Method Not Implemented.' });
}

/**
 * Create a new table
 *
 * POST /
 */
const store = async (req, res) => {
	res.status(405).send({ status: 'fail', message: 'Method Not Implemented.' });
}

/**
 * Update a table
 *
 * PUT /:tableId
 */
const update = async (req, res) => {
	res.status(405).send({ status: 'fail', message: 'Method Not Implemented.' });
}

/**
 * Delete a table
 *
 * DELETE /:tableId
 */
const destroy = async (req, res) => {
	res.status(405).send({ status: 'fail', message: 'Method Not Implemented.' });
}

module.exports = {
	index,
	show,
	store,
	update,
	destroy,
}
