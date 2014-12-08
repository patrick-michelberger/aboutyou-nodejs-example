'use strict';

angular.module('aboutYouApp')
  .factory('productSet', function () {

    var productSet = {
      "items" : []
    };

    var isItemInSet = function(item) {
        console.log("productSet ")

        if(productSet.items.indexOf(item) !== -1) {
            return true;
        } else {
            return false;
        }
    };

    return productSet;
  });
