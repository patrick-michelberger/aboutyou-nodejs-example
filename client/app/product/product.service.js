'use strict';

angular.module('aboutYouApp')
  .factory('productService', function ($rootScope, $http) {
    var ProductService = {}

    ProductService.products = [];

    ProductService.fetchProducts = function () {
        $http.get('/api/products').success(function (newProducts) {
            ProductService.products.length = 0;
            ProductService.products = newProducts;
            $rootScope.$broadcast('productService:products:fetched');
        });
    };

    ProductService.fetchProductsByCategoryId = function (id) {
        $http.get('/api/categories/' + id + '/products').success(function (newProducts) {
            ProductService.products.length = 0;
            ProductService.products = newProducts;
            console.log("NEW PRODUCTS");
        });
    };


    ProductService.getProducts = function() {
        return ProductService.products;
    };

    return ProductService;
  });
