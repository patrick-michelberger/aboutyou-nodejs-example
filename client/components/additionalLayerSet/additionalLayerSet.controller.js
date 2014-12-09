'use strict';

angular.module('aboutYouApp')
    .controller('AdditionalLayerSetCtrl', function ($scope, $window, $modal, $modalInstance, items, appService, productSet) {

        // attributes

        $scope.items = productSet.items;

        $scope.set = {};
        $scope.set.quantity = 1;
        if ($scope.set['additional_data'] === undefined) {
            $scope.set['additional_data'] = {};
        }

        $scope.newAttribute = {};

        // custom watchers
        $scope.$watch('items', function(newValue) {
           if(newValue.length < 1) {
               $modalInstance.close();
           }
        }, true);

        // methods

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.addAttribute = function () {
            console.log("addAttribute: ", $scope.newAttribute);
            $scope.set['additional_data'][$scope.newAttribute.key] = $scope.newAttribute.value;

            console.log($scope.set);
            // clear
            $scope.newAttribute = null;
        };

        $scope.removeAttribute = function (key) {
            delete $scope.set['additional_data'][key];
        };

        $scope.addItemsToBasket = function (items) {
            var currentApp = appService.getCurrentApp();

            items = excludeItemIds(items);

            $window.AY.addSetToBasket(items, 'MY_SESSION_ID', currentApp.selected.id, 1, $scope.set['additional_data'], function(error) {
                $modalInstance.close();
            });
        };

        $scope.removeItemFromSet = function (item, index) {
            $scope.items.splice(index, 1);
        };

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


        // helpers

        var excludeItemIds = function(items) {
            return items.map(function(item) {
                return {
                    "id" : item.defaultVariant.id,
                    "additional_data" : item.additional_data
                };
            });
        }
    });