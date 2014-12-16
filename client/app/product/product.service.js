'use strict';

angular.module('aboutYouApp')
  .factory('productService', function ($rootScope, $http) {

    var ProductService = {}
    var currentLimit = 25;
    var currentCount = 0;

    var isLoading = false;

    // attributes
    ProductService.products = [];
    ProductService.currentCategory = {};


    // methods
    ProductService.loadProducts = function() {
        if(typeof( ProductService.currentCategory.id) === 'undefined') {
            return ProductService.fetchProducts();
        } else {
            return ProductService.fetchProductsByCategoryId(ProductService.currentCategory);
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

    ProductService.fetchProductsByCategoryId = function (category) {
        return $http.get('/api/categories/' + category.id + '/products?count=' + currentCount).success(function (products) {
            currentCount = currentCount + currentLimit;
            saveProducts(products);
        });
    };

    ProductService.getProducts = function() {
        return ProductService.products;
    };

    ProductService.clearProducts = function(category) {
        if( ProductService.currentCategory.id != category.id) {
            // clear previous products from other catergory
            ProductService.products.length = 0;
            ProductService.currentCategory = category;
            currentCount = 0;
        }
    };

    // helpers
    var saveProducts = function(products) {
        for(var i = 0; i < products.length; i++) {
            ProductService.products.push(products[i]);
        }
    };

    return ProductService;
  });
