'use strict';

angular.module('myApp')
  .directive('welcome', function () {
    return {
      restrict: 'E',
      scope: {
        person: '='
      },
      template: '<h1>{{person.greet()}} Welcome to the app!</h1>',
      link: function (scope, element) {
        var original = element.css('color');
        element.on('mouseenter', function () {
          element.css('color', scope.person.favoriteColor);
        });
        element.on('mouseleave', function () {
          element.css('color', original);
        });
      }
    };
  });
