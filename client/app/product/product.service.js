'use strict';

angular.module('aboutYouApp')
  .factory('productService', function ($rootScope, $http) {
    var ProductService = {}

    ProductService.products = [];

    ProductService.fetchProducts = function () {
        return $http.get('/api/products').then(function (response) {

            var products = response.data;

            for(var i = 0; i < products.length; i++) {
                ProductService.products.push(products[i]);
            }

            $rootScope.$broadcast('productService:products:fetched');

        });
    };

    ProductService.fetchProductsByCategoryId = function (id) {
        $http.get('/api/categories/' + id + '/products').success(function (newProducts) {
            ProductService.products.length = 0;
            ProductService.products = newProducts;
        });
    };


    ProductService.getProducts = function() {
        return ProductService.products;
    };

    return ProductService;
  });
