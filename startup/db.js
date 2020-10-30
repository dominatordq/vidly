const winston = require('winston');
const mongoose = require('mongoose');
const config = require('config');

// Handles all of the database startup/management
module.exports = function() {
    // const db = config.get('db');
    const db = 'mongodb+srv://vidlyuser:1234@vidly.6jxtf.mongodb.net/sandbox?retryWrites=true&w=majority';
    mongoose.connect(db, { useNewUrlParser: true })
        .then(() => winston.info(`Connected to ${db}...`));
}