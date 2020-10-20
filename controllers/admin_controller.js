/**
 * Admin Controller 
 */

const Admin = require('../models/admin');
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");
const { matchedData, validationResult } = require('express-validator');
const debug = require('debug')('halp:admin_controller');
const config = require('../config');

/**
 * Get all admins
 *
 * GET /
 */
const index = async (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method Not Allowed.',
    });
}

/**
 * Get a admin
 *
 * GET /:adminId
 */
const show = async (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method Not Allowed.',
    });
}

/**
 * Create a new admin
 *
 * POST /
 */
const store = async (req, res) => {
    let hash;

    try {
        hash = await bcrypt.hash(req.body.password, config.PASSWORD_HASH_ROUNDS);

    } catch (error) {
        debug("Exception thrown when hashing the password:", error);
        return res.status(500).send({
            status: 'error',
            message: 'Exception thrown when hashing the password.',
        });
    }

    try {
        const admin = await new Admin({
            email: req.body.email,
            password: hash,
        }).save();

        if (!admin) {
            return res.status(500).send({
                status: 'error',
                message: 'Admin could not be created!',
            });
        }

        return res.send({
            status: 'success',
            data: {
                admin,
            }
        });
    } catch (error) {
        return res.status(500).send({
            status: error,
            message: 'Admin could not be created.'
        })
    }

    return res.status(405).send({ status: 'error', message: 'Not implemented' })
}

/**
 * Make a post to login admin
 *
 * POST /
 */
const storeLogin = async (req, res) => {
    let admin;
    try {
        admin = await Admin.findOne({ email: req.body.email });

        if (!admin) {
            return res.status(403).send({
                status: 'fail',
                message: 'Authentication failed.'
            });
        }
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            message: 'Authentication failed.'
        })
    }

    if (!await bcrypt.compare(req.body.password, admin.password)) {
        return res.status(405).send({
            status: 'error',
            message: 'Authentication failed.'
        })
    }

    const payload = {
        data: admin,
    }

    const access_token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: process.env.ACCESS_TOKEN_LIFETIME || '1h'
    });

    return res.status(200).send({
        status: 'success',
        data: {
            access_token,
        },
    })
}


/**
 * Update a admin
 *
 * PUT /:adminId
 */
const update = async (req, res) => {
    res.status(405).send({
        status: 'fail',
        message: 'Method Not Allowed.',
    });
}

/**
 * Delete a admin
 *
 * DELETE /:adminId
 */
const destroy = async (req, res) => {
    Admin.findOneAndDelete(req.params.adminId).exec().then(result => {
        res.status(200).json({
            message: "Eliminated admin."
        })
    }).catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
}

module.exports = {
    index,
    show,
    store,
    storeLogin,
    update,
    destroy,
}
