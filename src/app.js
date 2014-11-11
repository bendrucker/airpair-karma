'use strict';

angular.module('myApp')
  .controller('Person', function ($scope, Person) {
    this.person = $scope.person = Person;
  });


