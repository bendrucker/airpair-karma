'use strict';

angular.module('myApp')
  .controller('PersonController', function ($scope, Person) {
    this.person = $scope.person = new Person('Ben');
  });
