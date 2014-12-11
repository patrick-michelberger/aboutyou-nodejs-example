'use strict';

angular.module('aboutYouApp')
    .factory('appIdInterceptor', function ($window) {
        return {
            request: function (config) {
                var regex = /\/api\/.*/;
                var isApiEndpoint = regex.exec(config.url);

                if (isApiEndpoint) {
                    if(config.url.indexOf("?") === -1) {
                        if ($window.sessionStorage.appId) {
                            config.url = config.url + '?id=' + $window.sessionStorage.appId;
                        } else {
                            config.url = config.url + '?id=' + 100;
                        }
                    } else {
                        if ($window.sessionStorage.appId) {
                            config.url = config.url + '&id=' + $window.sessionStorage.appId;
                        } else {
                            config.url = config.url + '&id=' + 100;
                        }
                    }
                }

                return config;
            }
        }
    });
