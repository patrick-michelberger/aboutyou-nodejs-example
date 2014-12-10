'use strict';

var _ = require('lodash');
var helpers = require('../../helpers.js');

// Get list of categorys
var index = function (req, res) {
        var ay = req.aboutYou;

        ay.fetchCategoryTree(function (error, categoryTreeResult) {
            var categories = categoryTreeResult.categories;

            // Build category tree
            for (var a = 0; a < categories.length; a++) {

                var catA = categories[a];
                catA['subCats'] = [];


                for (var b = 0; b < catA.subcategories.length; b++) {

                    var catB = catA.subcategories[b];
                    catA['subCats'].push(catB);
                    catB['subCats'] = [];

                    for (var c = 0; c < catB.subcategories.length; c++) {

                        var catC = catB.subcategories[c];
                        catB['subCats'].push(catC);
                        catC['subCats'] = [];

                        for (var d = 0; d < catC.subcategories.length; d++) {

                            var catD = catC.subcategories[d];
                            catC['subCats'].push(catD);

                        }
                    }
                }

            }

            var result = _.clone(categories, true);

            // Remove category manager on every node
            for (var a = 0; a < result.length; a++) {

                if (result && result[a]) {


                    delete result[a]._categoryManager;

                    for (var b = 0; b < result[a].subCats.length; b++) {

                        if (result[a].subCats && result[a].subCats[b]) {
                            delete result[a].subCats[b]._categoryManager;

                            for (var c = 0; c < result[a].subCats[b].subCats.length; c++) {

                                if (result[a].subCats[b].subCats && result[a].subCats[b].subCats[c]) {
                                    delete result[a].subCats[b].subCats[c]._categoryManager;

                                    for (var d = 0; d < result[a].subCats[b].subCats[c].subCats.length; d++) {

                                        if (result[a].subCats[b].subCats[c].subCats && result[a].subCats[b].subCats[c].subCats[d]) {
                                            delete result[a].subCats[b].subCats[c].subCats[d]._categoryManager;
                                        }

                                    }
                                }
                            }
                        }
                    }

                }

            }

            res.json(result);
        });
};

// get category's products
var products = function(req, res) {
    var ay = req.aboutYou;
    var categoryId = parseInt(req.params.id, 10);

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

    ay.fetchProductSearch(
        criteria,
        function(error, productSearchResult) {
            var products = helpers.parseProductsToJSON(productSearchResult.products);
            res.json(products);
        }
    );
};

module.exports = {
    index : index,
    products : products
};