'use strict';

describe('PersonController', function () {

  var Person, controller, scope;
  beforeEach(module('myApp'));
  beforeEach(module(function ($provide) {
    $provide.value('visitor', {});
  }));
  beforeEach(inject(function (_Person_, $controller, $rootScope) {
    Person = _Person_;
    scope = $rootScope.$new();
    controller = $controller('PersonController', {
      $scope: scope
    });
  }));

  it('assigns a person to the controller', function () {
    expect(controller.person).to.be.an.instanceOf(Person);
  });

  it('assigns a person to the scope', function () {
    expect(scope.person).to.be.an.instanceOf(Person);
  });

});
