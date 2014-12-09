'use strict';

angular.module('aboutYouApp')
    .controller('ProductSetCtrl', function ($scope, productSet, $modal, $log) {

        $scope.items = productSet.items;

        $scope.openAdditionalDataLayer = function (item, size) {

            var modalInstance = $modal.open({
                templateUrl: 'additionalLayer.html',
                controller: 'AdditionalLayerCtrl',
                size: size,
                resolve: {
                    product: function () {
                        return item;
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });

        };

        $scope.removeItemFromSet = function (item, index) {
            $scope.items.splice(index, 1);
        };

        $scope.addItemsToBasket = function (items) {
            console.log("addItemsToBasket: ", items);
        };

    });
