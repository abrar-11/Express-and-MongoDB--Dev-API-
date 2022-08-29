const ErrorResponse = require("../utils/errorResponse");

const erroHandler = function (err, req, res, next) {
   //    console.log(err.stack.red);

   let error = { ...err };

   error.message = err.message;

   if (err.name == "CastError") {
      const message = `Not Found Id: ${err.value}`;
      error = new ErrorResponse(message, 404);
   }

   res.status(error.statusCode || 500).json({
      success: false,
      error: error.message || "Sorry! Somthing failed .. ",
   });
};

module.exports = erroHandler;
