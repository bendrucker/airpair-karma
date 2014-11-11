'use strict';

angular.module('myApp')
  .directive('welcome', function () {
    return {
      scope: {
        person: '='
      },
      template: '<h1>{{person.greet()}} Welcome to the app!</h1>'
    };
  });
