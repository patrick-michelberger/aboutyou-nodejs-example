'use strict';

angular.module('aboutYouApp')
    .controller('ProductSetCtrl', function ($scope, $window, productSet, $modal, $log, appService) {

        $scope.items = productSet.items;

        $scope.openAdditionalDataLayerSingle = function (item, size) {

            var modalInstance = $modal.open({
                templateUrl: 'additionalLayerSingle.html',
                controller: 'AdditionalLayerSingleCtrl',
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

        $scope.openAdditionalDataLayerSet = function (items, size) {
            var modalInstance = $modal.open({
                templateUrl: 'additionalLayerSet.html',
                controller: 'AdditionalLayerSetCtrl',
                size: size,
                resolve: {
                    items: function () {
                        return items;
                    }
                }
            });
        };

        $scope.removeItemFromSet = function (item, index) {
            $scope.items.splice(index, 1);
        };
    });
