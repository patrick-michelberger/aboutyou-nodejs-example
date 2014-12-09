'use strict';

angular.module('aboutYouApp')
    .controller('AdditionalLayerSetCtrl', function ($scope, $window, $modalInstance, items, appService) {

        $scope.items = items;

        $scope.set = {};
        $scope.set.quantity = 1;

        $scope.newAttribute = {};

        if ($scope.set['additional_data'] === undefined) {
            $scope.set['additional_data'] = {};
        }

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
            //items, userId, appId, quantity, additionalData, callback

            console.log("items: ", items);

            items = excludeItemIds(items);

            console.log("excluded item ids: ", items);

            console.log("$scope.set['additional_data']: ", $scope.set['additional_data']);

            $window.AY.addSetToBasket(items, 'MY_SESSION_ID', currentApp.selected.id, 1, $scope.set['additional_data'], function(error) {
                console.log("set added to basket.");
            });

        };


        var excludeItemIds = function(items) {
            return items.map(function(item) {
                return {
                    "id" : item.defaultVariant.id,
                    "additional_data" : item.additional_data
                };
            });
        }
    });