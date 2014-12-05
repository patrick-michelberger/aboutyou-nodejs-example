'use strict';

angular.module('aboutYouApp')
  .factory('appService', function ($rootScope, $http, $window) {
    var apps = [];
    var currentApp = {};

    var fetchApps = function() {
        $http.get('/api/apps').then(function(response) {
            apps.length = 0;
            apps.push.apply(apps,response.data);

            // set preselected app
            if($window.sessionStorage.appId) {
                var result = _.findWhere(apps, function(app) {
                   if(app.id == $window.sessionStorage.appId) {
                       return app;
                   }
                });
                currentApp['selected'] = result;
            } else {
                currentApp['selected'] = apps[0];
            }
            // include specific app header
            fetchJavascriptUrl();
        });
    };

    var fetchJavascriptUrl = function() {
        $http.get('/api/javascript').success(function(javascript) {
            currentApp['url'] = javascript.url;
        });
    };

    var updateCurrentApp = function() {
        $window.sessionStorage.appId = currentApp.selected.id;
        $window.location.reload();
    };

    var getApps = function() {
        return apps;
    };

    var getCurrentApp = function() {
        return currentApp;
    };

    fetchApps();

    // Public API here
    return {
      fetchApps : fetchApps,
      fetchJavascriptUrl: fetchJavascriptUrl,
      updateCurrentApp: updateCurrentApp,
      getApps : getApps,
      getCurrentApp : getCurrentApp
    };
  });
