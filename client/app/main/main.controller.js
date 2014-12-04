'use strict';

angular.module('aboutYouApp')
  .controller('MainCtrl', function ($scope, $http, $modal) {
        $http.get('/api/products').success(function(products) {
            $scope.products = products;
        });

        $scope.openAdditionalDataLayer = function(product, size) {
            var modalInstance = $modal.open({
                templateUrl: 'additionalLayer.html',
                controller: 'AdditionalLayerCtrl',
                size: size,
                resolve: {
                    product: function () {
                        return product;
                    }
                }
            })

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };
  });
