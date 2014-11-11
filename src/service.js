'use strict';

angular.module('myApp')
  .value('Person', Person);

function Person (name) {
  this.name = name;
}
