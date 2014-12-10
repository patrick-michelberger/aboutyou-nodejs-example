'use strict';

var _ = require('lodash');

// Get list of javascripts
exports.index = function(req, res) {
  var ay = req.aboutYou;

  res.json({
      "url" : ay.javaScriptTag
  });
};