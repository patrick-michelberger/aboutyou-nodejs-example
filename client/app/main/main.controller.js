'use strict';

angular.module('aboutYouApp')
  .controller('MainCtrl', function ($scope, $http) {
        $http.get('/api/products').success(function(products) {
            $scope.products = products;
        });
  });
