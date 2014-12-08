'use strict';

angular.module('aboutYouApp')
  .controller('AdditionalLayerCtrl', function ($scope, $modalInstance, product) {

    $scope.product = product;
    $scope.attributes = {};

    $scope.addToBasket = function () {
        alert("Legt Produkt oder Set in den Warenkorb");
        $modalInstance.close();
    };

    $scope.addAttribute = function () {
        $scope.attributes[$scope.newAttribute.key] = $scope.newAttribute.value;
        // clear
        $scope.newAttribute = null;
    };

    $scope.removeAttribute = function (key) {
        delete $scope.attributes[key];
    };

    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };

    $scope.isEmpty = function (obj) {
        return angular.equals({},obj);
    };

  });
