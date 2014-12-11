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
            if ($scope.isLoadingProducts) return;
            $scope.isLoadingProducts = true;
            productService.loadProducts().then(function() {
                $scope.isLoadingProducts = false;
            });
        };

    });
