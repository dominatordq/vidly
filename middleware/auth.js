const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided.'); // 401: this means the client doesn't have the authentication credentials to access this rss
    
    try {
        const decoded = jwt.verify(token, config.get('jwtPrivateKey')); // decoded payload 
        req.user = decoded;
        next(); // pass control to next middleware function in processing pipeline
        // console.log(req.user._id);
    }
    catch (ex) {
        res.status(400).send('Invalid token.');
    }
}
// module.exports = auth;