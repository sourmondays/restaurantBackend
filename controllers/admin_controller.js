/**
 * Admin Controller 
 */

const Admin = require('../models/admin');
const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt");

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
    Admin.find({ email: req.body.email })
        .exec()
        .then(admin => {
            if (admin.length >= 1) {
                return res.status(422).json({
                    message: "This admin already exist."
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const admin = new Admin({
                            _id: new mongoose.Types.ObjectId(),
                            email: req.body.email,
                            password: hash
                        });
                        admin
                            .save()
                            .then(result => {
                                console.log(result);
                                res.status(200).json({
                                    message: "Admin created succesfully."
                                });
                            })
                            .catch(error => {
                                console.log(error);
                                res.status(500).json({
                                    error: error.message
                                });
                            });
                    }
                });
            }
        });
}

/**
 * Make a post to login admin
 *
 * POST /
 */
const storeLogin = async (req, res) => {
    Admin.find({ email: req.body.email })
        .exec()
        .then(admin => {
            if (admin.length < 1) {
                return res.status(401).json({
                    message: "Authorization failed."
                });
            }
            bcrypt.compare(req.body.password, admin[0].password, (err, result) => {
                if (err) {
                    return res.status(401).json({
                        message: "Authorization failed"
                    });
                }
                if (result) {
                    const token = jwt.sign(
                        {
                            email: admin[0].email,
                            adminId: admin[0]._id
                        },
                        process.env.JWT_KEY,
                        {
                            expiresIn: "1h"
                        }
                    );
                    return res.status(200).json({
                        message: "Authorization successful.",
                        token: token
                    });
                }
                res.status(401).json({
                    message: "Authorization failed."
                });
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
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
