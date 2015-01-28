'use strict';

angular.module('aboutYouApp')
  .directive('breadcrumb', function ($rootScope) {
    return {
      restrict: 'EA',
      link: function (scope, element, attrs) {

        scope.setBreadcrumb = function($event) {
          var parent = $($event.target).data().$scope;
          $rootScope.currentBreadCrumb = getBreadcrumb(parent);
        };

        function getBreadcrumb(element) {
          var current = element;
          var categories = [];

          while(current.$parent && current.$parent.category) {
            categories.push(current.category.name);
            current = current.$parent.$parent;
          }
          categories.push(current.category.name);
          categories.reverse();

          var breadcrumb = categories[0];
          for(var i = 1; i < categories.length; i++) {
            breadcrumb = breadcrumb + ' > ' + categories[i];
          }
          return breadcrumb;

        };

      }
    };
  });