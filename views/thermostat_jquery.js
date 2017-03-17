$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

$('#temperature-up').click(function(){
  thermostat.increase();
  updateTemperature();
})

$('#temperature-down').click(function(){
  thermostat.decrease();
  updateTemperature();
})

$('#temperature-reset').click(function(){
  thermostat.reset();
  updateTemperature();
})

$('#power-saving').click(function(){
  thermostat.switchMode();
  $('#ps').text(thermostat.checkPowerSavingMode());
  updateTemperature();
})

$('#usage').text(thermostat.checkUsage());

 function updateTemperature() {
   $('#temperature').text(thermostat.checkCurrentTemperature());

 };
});

// check mode and check usage functions needed to be implemented so it updates
