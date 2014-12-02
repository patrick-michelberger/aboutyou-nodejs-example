/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');

// ABOUT YOU module
var aboutYou = require('x-aboutyou-sdk')(100,'3ed93394c2b5ebd12c104b177b928ad0');

// Setup server
var app = express();
var server = require('http').createServer(app);

// Make the AboutYou module accessible to our router
app.use(function(req,res,next){
    req.aboutYou = aboutYou;
    next();
});

require('./config/express')(app);
require('./routes')(app);

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'));
});

// Expose app
exports = module.exports = app;