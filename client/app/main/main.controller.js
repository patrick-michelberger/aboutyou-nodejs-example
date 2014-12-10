'use strict';

angular.module('aboutYouApp')
    .controller('MainCtrl', function ($scope, productService) {
        $scope.$on('productService:products:fetched', function() {
            $scope.products = productService.getProducts();
        });

        productService.fetchProducts();
    });
