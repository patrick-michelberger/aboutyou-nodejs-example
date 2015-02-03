'use strict';

angular.module('aboutYouApp')
  .controller('AlertCtrl', function ($scope) {
        $scope.alerts = [];

        $scope.$on('basket:set:added:success', function(msg) {
            $scope.alerts.length = 0;
            $scope.alerts.push({
                type : 'success',
                msg : 'Success: Added to basket'
            });
        });

        $scope.$on('basket:set:added:error', function(msg) {
          $scope.alerts.length = 0;
          $scope.alerts.push({
            type : 'danger',
            msg : 'Error: adding product to basket.'
          });
        });

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };
  });
