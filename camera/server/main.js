'use strict';
/**
 * Server entry point
 */

/* Imports */

const express = require('express');
const cv = require('opencv');
const properties = require('./properties.js');
const resHandler = require('./handlers/resHandler.js');

var listeningPort = properties.port;
var serverName = properties.server_name;

var app = express();

var requestTime = function(req, res, next) {
  req.requestTime = Date.now();
  return next();
};

app.use(requestTime);
app.use(express.static('../client'));

app.get('/resource', resHandler.getResponse);

var server = app.listen(listeningPort, ServerListening);

function ServerListening(req, res, next) {
  console.info(serverName + ' [listening on port: ' + listeningPort + '].');
}
