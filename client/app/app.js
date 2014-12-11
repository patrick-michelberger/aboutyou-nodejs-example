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
            .otherwise({
                redirectTo: '/'
            });

        // http interceptor
        $httpProvider.interceptors.push('appIdInterceptor');

        $locationProvider.html5Mode(true);
    });