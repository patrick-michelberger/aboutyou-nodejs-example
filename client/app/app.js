'use strict';

angular.module('aboutYouApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'infinite-scroll'
])
    .config(function ($routeProvider, $locationProvider, $httpProvider) {
        $routeProvider
          .when('/iframe', {
              templateUrl: 'app/iframe/iframe.html',
              controller: 'IframeCtrl'
          })
          .otherwise({
              redirectTo: '/'
          });

        // http interceptor
        $httpProvider.interceptors.push('appIdInterceptor');

        $locationProvider.html5Mode(true);
    });
