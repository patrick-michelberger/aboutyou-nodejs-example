'use strict';

angular.module('aboutYouApp')
    .controller('MainCtrl', function ($scope, productService) {
        $scope.$watch(function() {
            return productService.currentCategory;
        }, function(newValue) {
            $scope.currentCategory = newValue;
        });
    });
