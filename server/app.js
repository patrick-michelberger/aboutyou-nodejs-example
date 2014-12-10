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
    '100' : require('x-aboutyou-sdk')(100,'3ed93394c2b5ebd12c104b177b928ad0', 'live')
};

// Setup server
var app = express();
var server = require('http').createServer(app);

// Make the AboutYou module accessible to our router
app.use(function(req,res,next){
    var id = req.query.id;
    // check for api route
    if(isApiEndpoint(req.path)) {
        if (typeof(id) !== "undefined" && apps.checkValidId(id)) {
            // check if AY module for this app is already available
            if(!aboutYou[id]) {
                // find app token
                aboutYou[id] = require('x-aboutyou-sdk')(id, apps.getTokenById(id), 'live');
            }
            req.aboutYou = aboutYou[id];
        } else {
            req.aboutYou = aboutYou['100'];
        }
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


var isApiEndpoint = function(url) {
    var regex = /\/api\/.*/;
    var match = regex.exec(url);
    if(match) {
        return true;
    }
    return false;
};