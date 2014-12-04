'use strict';

angular.module('aboutYouApp')
  .controller('AdditionalLayerCtrl', function ($scope, $modalInstance, product) {

    $scope.product = product;

    $scope.addToBasket = function () {
        alert("Legt Produkt oder Set in den Warenkorb");
        $modalInstance.close();
    };

    $scope.addAttribute = function () {
        alert("Weitere Attribute (Key + Value frei wählbar) hinzufügen");
    };


    $scope.cancel = function() {
        $modalInstance.dismiss('cancel');
    };

  });
