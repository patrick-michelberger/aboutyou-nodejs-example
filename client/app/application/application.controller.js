'use strict';

angular.module('aboutYouApp')
    .controller('ApplicationCtrl', function ($scope, $http, $sce, appService) {
        $scope.currentApp = appService.getCurrentApp();

        $scope.trustSrc = function (src) {
            return $sce.trustAsResourceUrl(src);
        };
    });
