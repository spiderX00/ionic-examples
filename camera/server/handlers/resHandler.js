function getResponse(req, res, next) {
  var responseText = 'resource ';
  responseText += 'Requested at: ' + req.requestTime + '';
  res.send(responseText);
  return next();
}

module.exports.getResponse = getResponse;
