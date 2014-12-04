'use strict';

var _ = require('lodash');

// Get list of categorys
exports.index = function (req, res) {

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