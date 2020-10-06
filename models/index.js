/**
 * Models
 */

const mongoose = require('mongoose');

// Connect to database
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Connection succes to MongoDB Atlas 🛹")
})

// Set up the models we want to use in our app

// Export everything
module.exports = {
}
