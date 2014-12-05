'use strict';

angular.module('aboutYouApp')
  .controller('NavbarCtrl', function ($scope, $location, $http, appService) {
    $http.get('/api/categories').success(function(categories) {
        $scope.categories = categories;
    });

    $scope.apps = appService.getApps();
    $scope.currentApp = appService.getCurrentApp();

    $scope.updateCurrentApp = function() {
        appService.updateCurrentApp();
    }

  });