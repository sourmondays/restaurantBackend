/**
 * Admin Controller 
 */

const models = require('../models');

/**
 * Get all admins
 *
 * GET /
 */
const index = async (req, res) => {
    res.status(405).send({ status: 'fail', message: 'Method Not Implemented.' });
}

/**
 * Get a admin
 *
 * GET /:adminId
 */
const show = async (req, res) => {
    res.status(405).send({ status: 'fail', message: 'Method Not Implemented.' });
}

/**
 * Create a new admin
 *
 * POST /
 */
const store = async (req, res) => {
    res.status(405).send({ status: 'fail', message: 'Method Not Implemented.' });
}

/**
 * Update a admin
 *
 * PUT /:adminId
 */
const update = async (req, res) => {
    res.status(405).send({ status: 'fail', message: 'Method Not Implemented.' });
}

/**
 * Delete a admin
 *
 * DELETE /:adminId
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
