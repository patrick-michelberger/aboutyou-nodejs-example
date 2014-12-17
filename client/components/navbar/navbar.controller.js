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

        $scope.setBreadCrumb = function() {
          var args = Array.prototype.slice.apply(arguments);
          $rootScope.currentBreadCrumb = getBreadcrumb(args);
        };

        function getBreadcrumb(categories) {
            var path = categories[0].name;
            for(var i = 1; i < categories.length; i++) {
                path = path + ' > ' + categories[i].name;

            }
            return path;
        }
    });