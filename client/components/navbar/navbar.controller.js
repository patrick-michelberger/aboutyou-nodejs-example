'use strict';

angular.module('aboutYouApp')
    .controller('NavbarCtrl', function ($scope, $location, $http, appService, productService) {

        $http.get('/api/categories').success(function (categories) {
            $scope.categories = categories;
        });

        $scope.apps = appService.getApps();
        $scope.currentApp = appService.getCurrentApp();

        $scope.updateCurrentApp = function () {
            appService.updateCurrentApp();
        }

        $scope.selectSubCategory = function(id) {
            console.log("selectSubCategory: ", id);
            productService.fetchProductsByCategoryId(id);
        };

        $scope.selectSubSubCategory = function(id) {
            console.log("selectSubSubCategory: ", id);
            productService.fetchProductsByCategoryId(id);
        };

    });