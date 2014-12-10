'use strict';

angular.module('aboutYouApp')
  .controller('AlertCtrl', function ($scope) {
        $scope.alerts = [];

        $scope.$on('basket:set:added', function(msg) {
            $scope.alerts.length = 0;
            $scope.alerts.push({
                type : 'success',
                msg : 'Success: Added to basket'
            });
        });

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
  });
