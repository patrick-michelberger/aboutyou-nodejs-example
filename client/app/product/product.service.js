'use strict';

angular.module('aboutYouApp')
  .factory('productService', function ($rootScope, $http) {
    var products = [];

    var fetchProducts = function () {
        $http.get('/api/products').success(function (newProducts) {
            products.length = 0;
            products = newProducts;
            $rootScope.$broadcast('productService:products:fetched');
        });
    };

    var getProducts = function() {
        return products;
    };

    // Public API here
    return {
      getProducts : getProducts,
      fetchProducts : fetchProducts
    };
  });
