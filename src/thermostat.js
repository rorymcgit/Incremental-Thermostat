'use strict';

function Thermostat (){
  this._temperature = 20
};

Thermostat.prototype.checkCurrentTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.increase = function () {
  this._temperature += 1;
};

Thermostat.prototype.decrease = function() {
  this._temperature -= 1;
};
