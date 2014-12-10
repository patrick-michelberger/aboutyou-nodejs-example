'use strict';

angular.module('aboutYouApp')
    .controller('AdditionalLayerSingleCtrl', function ($scope, $modalInstance, product) {

        // attributes
        $scope.product = product;

        if ($scope.product['additional_data'] === undefined) {
            $scope.product['additional_data'] = {};
        }

        // methods
        $scope.addAttribute = function () {
            $scope.product['additional_data'][$scope.newAttribute.key] = $scope.newAttribute.value;
            // clear
            $scope.newAttribute = null;
        };

        $scope.removeAttribute = function (key) {
            delete $scope.product['additional_data'][key];
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

        // helpers

        // HACK: watch for empty value keys
        $scope.$watch('product.additional_data', function(additionalData) {
            // check if a key is undefined
            for(var key in additionalData) {
                var value = additionalData[key];
                if(typeof(value) === 'undefined' || value === "") {
                    delete additionalData[key];
                }
            }
        }, true);

    });
