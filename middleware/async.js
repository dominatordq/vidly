module.exports = function (handler) { // will handle try/catch for router functions
    return async (req, res, next) => {
      try {
        await handler(req, res); 
      }
      catch (ex) {
        next(ex);
      }
    }
  }