'use strict';

function Thermostat (){
  this._temperature = 20
  this._minTemperature = 10
  this._maxTemperature = 32
  this._powerSaving = true
  this._psMaxTemperature = 25
};

Thermostat.prototype.checkCurrentTemperature = function () {
  return this._temperature;
};

Thermostat.prototype.checkPowerSavingMode = function () {
  return this._powerSaving;
};

Thermostat.prototype.switchMode = function () {
  this._powerSaving = !this._powerSaving;
};

Thermostat.prototype.increase = function () {
  if (this._temperature <= this._maxTemperature) {
    this._temperature += 1;
  } else {
    return 'Maximum temperature is 32!';
  }
};

Thermostat.prototype.decrease = function() {
  if (this._temperature >= this._minTemperature) {
    this._temperature -= 1;
  } else {
    return 'Minimum temperature is 10!'
  }
};
