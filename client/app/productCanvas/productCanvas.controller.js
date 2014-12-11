'use strict';

angular.module('aboutYouApp')
  .controller('ProductCanvasCtrl', function ($scope, productService) {
        $scope.isLoadingProducts = false;

        $scope.$watch(function () {
            return productService.products;
        }, function (products) {
            $scope.products = products;
        }, true);


        $scope.loadMoreProducts = function() {
            $scope.isLoadingProducts = true;
            productService.fetchProducts().then(function() {
                $scope.isLoadingProducts = true;
            });
        };

    });
