'use strict';

angular.module('aboutYouApp')
    .controller('AdditionalLayerSingleCtrl', function ($scope, $modalInstance, product) {

        $scope.product = product;

        if ($scope.product['additional_data'] === undefined) {
            $scope.product['additional_data'] = {};
        }

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

    });
