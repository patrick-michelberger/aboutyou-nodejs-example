'use strict';

var express = require('express');
var controller = require('./category.controller');

var router = express.Router();

router.get('/', controller.index);

router.get('/:id/products', controller.products);

module.exports = router;