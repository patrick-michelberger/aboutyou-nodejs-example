'use strict';

var helpers = require('../../helpers.js');

// Get list of products
exports.index = function(req, res) {
    var ay = req.aboutYou;

    var criteria = ay.productSearchCriteria

    var count = req.query.count || 0;

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
            // asynchronously called
            //var products = helpers.parseProductsToJSON(productSearchResult.products);
          res.json({
              "count" : productSearchResult.getProductCount(),
              "products" : productSearchResult.toJSON()
          });
        }
    );

};
