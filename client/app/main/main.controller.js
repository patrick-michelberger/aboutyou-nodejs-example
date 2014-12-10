'use strict';

angular.module('aboutYouApp')
    .controller('MainCtrl', function ($scope, productService) {
        $scope.$watch(function () {
            return productService.products;
        }, function (products) {
            $scope.products = products;
        }, true);

        productService.fetchProducts();
    });
