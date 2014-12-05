'use strict';

var _ = require('lodash');

// Get list of products
exports.index = function(req, res) {
    var ay = req.aboutYou;

    var criteria = ay.productSearchCriteria.selectProductFields(
        [
            'active',
            'brand_id',
            'description_long',
            'description_short',
            'min_price',
            'max_price',
            'sale',
            'default_image'
        ]
    );
    ay.fetchProductSearch(
        criteria,
        function(error, productSearchResult) {
            // asynchronously called
            var products = parseProductsToJSON(productSearchResult.products);

            res.json(products);
        }
    );

};


// helpers
var parseProductsToJSON = function(products) {

    return _.map(products, function(product) {

        var result = {
            "id" : product.id,
            "name" : product.name,
            "isSale" : product.isSale,
            "isActive" : product.isActive,
            "description" : product.descriptionShort,
            "brand" : {
                "id" : product.brand ? product.brand.id : 'undefined',
                "name" : product.brand ? product.brand.name : 'undefined'
            },
            "price" : product.minPrice,
            "defaultImage" : {
                "url" : product.defaultImage ? product.defaultImage.getUrl(450,450) : 'undefined',
                "imageSize" : product.defaultImage ? product.defaultImage.imageSize : 'undefined'
            }
        };

        return result;

    });

}