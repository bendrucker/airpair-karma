'use strict';

angular.module('myApp')
  .factory('Person', function (visitor) {
    return function Person (name) {
      this.name = name;
      this.greet = function () {
        if (visitor.country === 'UK') {
          console.log('Good day to you,', this.name + '.');
        }
        else {
          console.log('Hey', this.name + '!');
        }
      };
    };
  });


