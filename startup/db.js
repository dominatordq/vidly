const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

// Handles all of the database startup/management
module.exports = function() {
    const db = config.get('db')
    mongoose.connect(db, { useNewUrlParser: true })
        .then(() => winston.info(`Connected to ${db}...`));
}