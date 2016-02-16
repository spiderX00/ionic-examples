'use strict';
/**
 * Server entry point
 */

/* Imports */

const express = require('express');
const bodyParser = require('body-parser');
const cv = require('opencv');
const properties = require('./properties.js');
const resHandler = require('./handlers/resHandler.js');

var listeningPort = properties.port;
var serverName = properties.server_name;

var app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static('../client/www'));

app.post('/image/', resHandler.faceDetection);

var server = app.listen(listeningPort, ServerListening);

function ServerListening(req, res, next) {
  console.info(serverName + ' [listening on port: ' + listeningPort + '].');
}
