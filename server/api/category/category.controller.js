'use strict';

var _ = require('lodash');

// Get list of categorys
exports.index = function(req, res) {

    var ay = req.aboutYou;

    ay.fetchCategoryTree(function(error, categoryTreeResult) {
        var categories = categoryTreeResult.categories;

        // Build category tree
        for(var a = 0; a < categories.length; a++) {

            var catA = categories[a];
            catA['subCats'] = [];

            for(var b = 0; b < catA.subcategories.length; b++) {

                var catB = catA.subcategories[b];
                catA['subCats'].push(catB);
                catB['subCats'] = [];

                for(var c = 0; c < catB.subcategories.length; c++) {

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

        // Remove category manager on every node
        for(var a = 0; a < categories.length; a++) {
            delete categories[a]._categoryManager;
            for(var b = 0; b < categories[a].subCats.length; b++) {
                delete categories[a].subCats[b]._categoryManager;
                for(var c = 0; c < categories[c].subCats.length; c++) {
                    delete categories[c].subCats[c]._categoryManager;
                    for(var d = 0; d < categories[d].subCats.length; d++) {
                        delete categories[d].subCats[d]._categoryManager;
                    }
                }
            }
        }

        res.json(categories);
    });

};