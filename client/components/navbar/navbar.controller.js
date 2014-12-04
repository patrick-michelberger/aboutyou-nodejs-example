'use strict';

angular.module('aboutYouApp')
  .controller('NavbarCtrl', function ($scope, $location, $http) {
    $http.get('/api/categories').success(function(categories) {
        $scope.categories = categories;
    });

    $http.get('/api/apps').success(function(apps) {
        $scope.apps = apps;
        $scope.currentApp = apps[0];
    });



    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });