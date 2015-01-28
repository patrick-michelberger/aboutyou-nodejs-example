'use strict';

angular.module('aboutYouApp')
    .controller('NavbarCtrl', function ($rootScope, $scope, $location, $http, appService, productService) {

        $http.get('/api/categories').success(function (categories) {
            $scope.categories = categories;
        });

        $scope.apps = appService.getApps();
        $scope.currentApp = appService.getCurrentApp();

        $scope.updateCurrentApp = function () {
            appService.updateCurrentApp();
        }

        $scope.selectCategory = function(category) {
            productService.clearProducts(category);
        };
    });