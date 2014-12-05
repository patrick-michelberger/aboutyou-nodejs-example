/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var config = require('./config/environment');
var apps = require('./config/app.settings.js');

// ABOUT YOU moduleS
var aboutYou = {
    '100' : require('x-aboutyou-sdk')(100,'3ed93394c2b5ebd12c104b177b928ad0')
};

// Setup server
var app = express();
var server = require('http').createServer(app);

// Make the AboutYou module accessible to our router
app.use(function(req,res,next){
    if (req.query.id) {
        // check if AY module for this app is already available
        if(!aboutYou[req.query.id]) {
            // find app token
            aboutYou[req.query.id] = require('x-aboutyou-sdk')(req.query.id, apps.getTokenById(req.query.id));
        }
        req.aboutYou = aboutYou[req.query.id];
    } else {
        req.aboutYou = aboutYou['100'];
    }
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