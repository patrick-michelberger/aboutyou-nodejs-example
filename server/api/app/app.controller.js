'use strict';

var _ = require('lodash');

var apps = require('../../config/app.settings.js').data;

// Get list of apps
exports.index = function(req, res) {
    var tokenFilter = _.map(apps, function(app) {
        return _.omit(app, 'token');
    });
    res.json(tokenFilter);
};