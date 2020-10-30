/*** Handling Rejected Promises ***/
// See get method in genres.js

/*** Express Error Middleware ***/
// See error.js in middleware folder, index.js and genres.js

/*** Removing Try-Catch Blocks ***/
// See async.js in middleware folder and genres.js

/*** Express Async Errors ***/
// npm i express async-errors
// See index.js and genres.js

/*** Logging Errors ***/
// npm i winston
// See error.js, index.js and genres.js

/*** Logging to MongoDB ***/
// npm i winston-mongodb
// See index.js

/*** Uncaught Exceptions ***/
// See index.js

/*** Unhandled Promise Rejections ***/
// See index.js

/*** Extracting Routes ***/
// In startup folder, see routes.js, logging.js, db.js, validation.js, and config.js

/*** Showing Unhandled Exceptions in Console ***/
// See logging.js

/*-------------------TEST DRIVEN DEVELOPMENT-------------------------*/

/*** Implementing the Returns ***/
// POST /api/returns {customerId, movieId}

// Return 401 if client is not logged in
// Return 400 if customerId is not provided
// Return 400 if movieId is not provided
// Return 404 if no rental found for this customer/movie
// Return 400 if rental already processed
// Return 200 if valid request
// Set return date
// Calculate rental fee (numberOfDays * movie.dailyRentalRate)
// Increase stock of movie
// Return the rental