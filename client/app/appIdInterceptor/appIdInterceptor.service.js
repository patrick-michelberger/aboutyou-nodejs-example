'use strict';

angular.module('aboutYouApp')
  .factory('appIdInterceptor', function ($window) {
    return {
        request: function(config) {
            if($window.sessionStorage.appId) {
                config.url = config.url + '?id=' + $window.sessionStorage.appId;
            } else {
                config.url = config.url + '?id=' + 53;
            }
            return config;
        }
    }
  });
