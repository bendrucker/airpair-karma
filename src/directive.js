'use strict';

angular.module('myApp')
  .directive('welcome', function () {
    return {
      restrict: 'E',
      scope: {
        person: '='
      },
      template: '<h1>{{person.greet()}} Welcome to the app!</h1>'
    };
  });
