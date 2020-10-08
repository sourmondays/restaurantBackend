/**
 * Admin model
 */

const mongoose = require('mongoose');

//Admin Schema 
const AdminSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength: 5
    }
});

//Admin model 
const Admin = mongoose.model('Admin', AdminSchema);

// Export admin 
module.exports = Admin; 