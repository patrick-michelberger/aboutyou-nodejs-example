'use strict';

angular.module('aboutYouApp')
    .controller('AdditionalLayerSingleCtrl', function ($rootScope, $scope, $modalInstance, $window, product, appService) {

        // attributes
        $scope.product = product;

        /*
        if ($scope.product['additional_data'] === undefined) {
            $scope.product['additional_data'] = {};
        }
        */

        // methods
        $scope.addAttribute = function () {
            $scope.product['additional_data'] = $scope.product['additional_data'] ? $scope.product['additional_data'] : {};
            $scope.product['additional_data'][$scope.newAttribute.key] = $scope.newAttribute.value;
            // clear
            $scope.newAttribute = null;
        };

        $scope.removeAttribute = function (key) {
          delete $scope.product['additional_data'][key];
          checkForEmptyData();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        $scope.isEmpty = function (obj) {
            return angular.equals({}, obj);
        };

        $scope.saveItem = function () {
            $modalInstance.close();
        };

        $scope.addItemToBasket = function (item) {
            var currentApp = appService.getCurrentApp();

            item = excludeItemId(item);

            $window.AY.addToCart(item.id, item.quantity, 'MY_SESSION_ID', currentApp.selected.id, item.additional_data, function(addedToBasket) {
                if (addedToBasket) {
                  $rootScope.$broadcast('basket:set:added:success');
                } else {
                  $rootScope.$broadcast('basket:set:added:error');
                }
                $modalInstance.close();
            });
        };

        // helpers

        var excludeItemId = function(item) {
            return {
                "id" : item.defaultVariant.id,
                "quantity" : item.quantity,
                "additional_data" : item.additional_data
            };
        };

        // HACK: watch for empty value keys
        $scope.$watch('product.additional_data', function(additionalData) {
            // check if a key is undefined
            for(var key in additionalData) {
                var value = additionalData[key];
                if(typeof(value) === 'undefined' || value === "") {
                    delete additionalData[key];
                    checkForEmptyData();
                }
            }
        }, true);


        var checkForEmptyData = function() {
          if (angular.equals({}, $scope.product['additional_data'])) {
            delete $scope.product['additional_data'];
          }
        };

    });
