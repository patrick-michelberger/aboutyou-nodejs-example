'use strict';

angular.module('aboutYouApp')
  .controller('ProductCanvasCtrl', function ($scope, productService) {
    $scope.isLoadingProducts = false;
    var moreProducts = true;

    $scope.$watch(function () {
            return productService.products;
        }, function (products) {
            $scope.products = products;
            $scope.count = productService.count;
        }, true);




        $scope.loadMoreProducts = function() {
          if(moreProducts) {
            if ($scope.isLoadingProducts) return;
            $scope.isLoadingProducts = true;
              productService.loadProducts().then(function(response) {
                $scope.isLoadingProducts = false;
                if(response && response.data && response.data.length < 1) {
                  moreProducts = false;
                }
              });
          }
        };

    });
