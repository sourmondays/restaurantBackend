/**
 * Auth middleware
 */

const jwt = require('jsonwebtoken');

const validateJwtToken = (req, res, next) => {
    if (!req.token) {
        return res.status(401).send({
            status: 'error',
            message: 'There was no token found in this request.'
        })
    }

    let payload;
    try {
        payload = jwt.verify(req.token, process.env.ACCESS_TOKEN_SECRET);

        req.admin = payload;
    } catch (error) {
        return res.status(403).send({
            status: 'error',
            message: 'Invalid token.'
        })
    }

    next()
}

module.exports = {
    validateJwtToken,
}