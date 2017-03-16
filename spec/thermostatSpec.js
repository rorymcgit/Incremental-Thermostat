'use strict';

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat._temperature).toEqual(20);
  });

  it('has a minimum temperature', function(){
    expect(thermostat._minTemperature).toEqual(10);
  });

  it('has a maximum temperature', function(){
   expect(thermostat._maxTemperature).toEqual(32);
  });

  it('has power saving on to begin', function(){
    expect(thermostat._powerSaving).toEqual(true);
  });

  it('return the current temperature', function() {
    expect(thermostat.checkCurrentTemperature()).toEqual(20);
  });

  describe('Increase', function(){

    it('increases the temperature by 1', function(){
      thermostat.increase();
      expect(thermostat._temperature).toEqual(21);
    });

    it('wont\'t allow to increase past max temperature', function(){
      thermostat._temperature = 32;
      thermostat.increase();
      expect(thermostat.increase()).toEqual('Maximum temperature is 32!');
    });
  });

  describe('Decrease', function(){

    it('decreases temperature by 1', function(){
      thermostat.increase();
      thermostat.decrease();
      expect(thermostat._temperature).toEqual(20);
    });

    it('wont\'t allow to decrease past min temperature', function(){
      thermostat._temperature = 10
      thermostat.decrease();
      expect(thermostat.decrease()).toEqual('Minimum temperature is 10!')
    });
  });
});
