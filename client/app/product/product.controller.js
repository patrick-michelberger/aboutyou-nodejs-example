'use strict';

angular.module('aboutYouApp')
  .controller('ProductCtrl', function ($scope, $modal, appService, $log, productSet) {

        // Attributes
        $scope.addedToSet = false;

        $scope.$watch(function() {
            return productSet;
        }, function(newProductSet) {
            $scope.addedToSet = (newProductSet.items.indexOf($scope.product) !== -1) ? true : false;
        }, true);

        // Methods
        $scope.openAdditionalDataLayer = function(size) {

            var modalInstance = $modal.open({
                templateUrl: 'additionalLayer.html',
                controller: 'AdditionalLayerCtrl',
                size: size,
                resolve: {
                    product: function () {
                        return $scope.product;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };

        $scope.openQuickView = function(product) {
            AY.openProductLayer(appService.getCurrentApp().selected.id, product.id, appService.getCurrentApp().id);
        };

        $scope.addToCart = function(product) {
            AY.addToCart(
                product.defaultVariant.id,
                1,
                appService.getCurrentApp().selected.id,
                appService.getCurrentApp().selected.id
            );
        };

        $scope.addToSet = function(product) {
            product.quantity = 1;
            productSet.items.push(product);
            $scope.addedToSet = true;
        };

        $scope.removeFromSet = function(product, index) {
            productSet.items.splice(productSet.items.indexOf($scope.product), 1);
        };
  });
