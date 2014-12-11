'use strict';

angular.module('aboutYouApp')
  .factory('productService', function ($rootScope, $http) {

    var ProductService = {}
    var currentCategory = 0;
    var currentLimit = 25;
    var currentCount = 0;

    // attributes
    ProductService.products = [];


    // methods
    ProductService.loadProducts = function() {
        if(currentCategory === 0) {
            return ProductService.fetchProducts();
        } else {
            return ProductService.fetchProductsByCategoryId(currentCategory);
        }
    };

    ProductService.fetchProducts = function () {
        return $http.get('/api/products?count=' + currentCount).then(function (response) {
            currentCount = currentCount + currentLimit;
            var products = response.data;

            saveProducts(products);

            $rootScope.$broadcast('productService:products:fetched');

        });
    };

    ProductService.fetchProductsByCategoryId = function (id) {
        if(currentCategory != id) {
            // clear previous products from other catergory
            ProductService.products.length = 0;
            currentCategory = id;
            currentCount = 0;
        }
        return $http.get('/api/categories/' + id + '/products?count=' + currentCount).success(function (products) {
            currentCount = currentCount + currentLimit;
            saveProducts(products);
        });
    };

    ProductService.getProducts = function() {
        return ProductService.products;
    };

    // helpers
    var saveProducts = function(products) {
        for(var i = 0; i < products.length; i++) {
            ProductService.products.push(products[i]);
        }
    };

    return ProductService;
  });
