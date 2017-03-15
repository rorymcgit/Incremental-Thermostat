'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat._temperature).toEqual(20);
  });

  it('return the current temperature', function() {
    expect(thermostat.checkCurrentTemperature()).toEqual(20);
  });

  describe('Increase', function(){

    it('increases the temperature by 1', function(){
      thermostat.increase();
      expect(thermostat._temperature).toEqual(21);
    });
  });

  describe('Decrease', function(){

    it('decreases temperature by 1', function(){
      thermostat.increase();
      thermostat.decrease();
      expect(thermostat._temperature).toEqual(20);
    });
  });

});
