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

        var brand = product.getBrand();
        var image = product.getDefaultImage();

        var result = {
            "id" : product.id,
            "name" : product.name,
            "isSale" : product.isSale,
            "isActive" : product.isActive,
            "descriptionShort" : product.descriptionShort,
            "descriptionLong" : product.descriptionLong,
            "brand" : {
                "id" : brand.id,
                "name" : brand.name
            },
            "minPrice" : product.minPrice,
            "maxPrice" : product.maxPrice,
            "defaultImage" : {
                "imageSize" : image.imageSize,
                "height" : image.MAX_WIDTH,
                "url" : image.url
            }
        }

        return result;

    });

}