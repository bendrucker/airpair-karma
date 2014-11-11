'use strict';

angular.module('myApp')
  .factory('Person', function (visitor) {
    return function Person (name) {
      this.name = name;
      this.greet = function () {
        if (visitor.country === 'UK') {
          return 'Good day to you, ' + this.name + '.';
        }
        else {
          return 'Hey ' + this.name + '!';
        }
      };
    };
  });


