'use strict';

angular.module('aboutYouApp')
  .controller('NavbarCtrl', function ($scope, $location, $http) {
    $http.get('/api/categories').success(function(categories) {
        $scope.categories = categories;
    });

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });