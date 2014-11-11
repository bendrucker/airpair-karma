'use strict';

angular.module('myApp')
  .factory('Person', Person);

function Person (name) {
  this.name = name;
}
