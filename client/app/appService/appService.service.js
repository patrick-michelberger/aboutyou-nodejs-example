'use strict';

angular.module('aboutYouApp')
  .factory('appService', function ($rootScope, $http) {
    var apps = [];
    var currentApp = {};

    var fetchApps = function() {
        $http.get('/api/apps').then(function(response) {
            apps.length = 0;
            apps.push.apply(apps,response.data);
            if(!currentApp['selected']) {
                currentApp['selected'] = apps[0];
                fetchJavascriptUrl();
            }
        });
    };

    var fetchJavascriptUrl = function() {
        $http.get('/api/javascript').success(function(javascript) {
            currentApp['url'] = javascript.url;
        });
    };

    var updateCurrentApp = function() {
        if(currentApp.selected) {
            $http.post('/api/apps?id=' + currentApp.selected.id);
        }
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
