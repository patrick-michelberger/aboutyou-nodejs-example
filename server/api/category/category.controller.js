'use strict';

var _ = require('lodash');
var helpers = require('../../helpers.js');

// Get list of categorys
var index = function (req, res) {
        var ay = req.aboutYou;

        ay.fetchCategoryTree(function (error, tree) {
            res.json(tree.toJSON());
        });
};

// get category's products
var products = function(req, res) {
    var ay = req.aboutYou;
    var categoryId = parseInt(req.params.id, 10);
    var count = req.query.count || 0;

    var criteria = ay.productSearchCriteria;

    criteria.filterByCategoryIds([categoryId]);
    criteria.selectProductFields(
        [
            'active',
            'brand_id',
            'description_long',
            'description_short',
            'min_price',
            'max_price',
            'sale',
            'default_image',
            'default_variant'
        ]
    );

    criteria.setLimit(25, count);

    ay.fetchProductSearch(
        criteria,
        function(error, productSearchResult) {
          res.json({
            "count" : productSearchResult.getProductCount(),
            "products" : productSearchResult.toJSON()
          });
        }
    );
};

module.exports = {
    index : index,
    products : products
};
