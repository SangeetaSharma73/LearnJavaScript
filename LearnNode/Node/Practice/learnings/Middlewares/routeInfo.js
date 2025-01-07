 function routeInfoMiddleware(err, req, res, next) {
  console.log("REQUEST METHOD:  ", req.method);
   
   next();
}

module.exports = routeInfoMiddleware;