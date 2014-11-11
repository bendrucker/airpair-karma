'use strict';

describe('Welcome Directive', function () {

  var element, scope;
  beforeEach(module('myApp'));
  beforeEach(inject(function ($compile, $rootScope) {
    scope = $rootScope.$new();
    element = $compile('<welcome person="person"></welcome>')(scope);
  }));

  it('welcomes the person', function () {
    scope.person = {
      greet: function () {
        return 'Hello!';
      }
    };
    scope.$digest();
    expect(element.find('h1').text()).to.equal('Hello! Welcome to the app!');
  });

});
