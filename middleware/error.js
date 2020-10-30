const winston = require('winston');

module.exports = function(err, req, res, next) {
    winston.error(err.message, err);
    
    // error
    // warn
    // info
    // verboose
    // debug
    // silly
    // Log the exception
    res.status(500).send('Something server-related failed.') // error 500 means internal server error
}