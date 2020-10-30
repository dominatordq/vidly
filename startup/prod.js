const helmet = require('helmet');
const compression = require('compression');

module.exports = function(app) {
    app.use(helmet());    // function we need to call in order to get a middleware function
    app.use(compression());
}