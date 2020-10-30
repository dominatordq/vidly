const winston = require('winston');
// require('winston-mongodb');  // this won't allow for integrating testing for some reason
require('express-async-errors');

// Handles all of the error/rejection logging
module.exports = function() {
    winston.exceptions.handle(
        new winston.transports.Console({ colorize: true, prettyPrint: true }),
        new winston.transports.File({ filename: 'uncaughtExceptions.log' }));

    process.on('unhandledRejection', (ex) => { // how to handle unhandlded rejection
        throw ex;
    });

    winston.add(new winston.transports.Console({ colorize: true, prettyPrint: true }));
    winston.add(new winston.transports.File({ filename: 'logfile.log' }));
    // winston.add(new winston.transports.MongoDB({ 
    //     db: 'mongodb://localhost/vidly',
    //     level: 'error' 
    // }));
}