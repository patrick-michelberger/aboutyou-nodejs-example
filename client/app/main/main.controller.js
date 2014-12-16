'use strict';

angular.module('aboutYouApp')
    .controller('MainCtrl', function ($scope, productService) {
        $scope.$watch(function() {
            return productService.currentCategory;
        }, function(newValue) {
            console.log("new value: ", newValue);
            $scope.currentCategory = newValue;
        });
    });
