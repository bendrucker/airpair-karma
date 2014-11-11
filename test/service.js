'use strict';

describe('Person', function () {

  var Person, visitor;
  beforeEach(module('myApp'));
  beforeEach(module(function ($provide) {
    visitor = {};
    $provide.value('visitor', visitor);
  }));
  beforeEach(inject(function (_Person_) {
    Person = _Person_;
  }));

  describe('Constructor', function () {

    it('assigns a name', function () {
      expect(new Person('Ben')).to.have.property('name', 'Ben');
    });

  });

  describe('#greet', function () {

    it('greets UK visitors formally', function () {
      visitor.country = 'UK';
      expect(new Person('Nigel').greet()).to.equal('Good day to you, Nigel.');
    });

    it('greets others visitors informally', function () {
      expect(new Person('Ben').greet()).to.equal('Hey Ben!');
    });

  });

});
