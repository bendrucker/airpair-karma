'use strict';

angular.module('myApp')
  .factory('Person', function (visitor, $http) {
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
      this.create = function () {
        return $http.post('/people', this);
      };
    };
  });


