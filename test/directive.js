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
    expect(element.find('h1').text()).to.equal('{{person.greet()}} Welcome to the app!');
    scope.$digest();
    expect(element.find('h1').text()).to.equal('Hello! Welcome to the app!');
  });

  it('displays the person\'s favorite color on hover', function () {
    scope.person = {
      greet: function () {
        return 'Hello!';
      },
      favoriteColor: 'blue'
    };
    scope.$digest();
    element.triggerHandler('mouseenter');
    expect(element.css('color')).to.equal('blue');
    element.triggerHandler('mouseleave');
    expect(element.css('color')).to.be.empty;
  });

});
