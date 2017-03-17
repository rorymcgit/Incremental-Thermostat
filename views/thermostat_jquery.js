$(document).ready(function() {
  var thermostat = new Thermostat();
  update();

$('#temperature-up').click(function(){
  thermostat.increase();
  update();
})

$('#temperature-down').click(function(){
  thermostat.decrease();
  update();
})

$('#temperature-reset').click(function(){
  thermostat.reset();
  update();
})

$('#power-saving').click(function(){
  thermostat.switchMode();
  $('#ps').text(thermostat.checkPowerSavingMode());
  update();
})

 function update() {
   $('#temperature').text(thermostat.checkCurrentTemperature());
   $('#usage').text(thermostat.checkUsage());
  //  $('#ps').text(thermostat.checkMaxTemp());
 };
});

// check mode and check usage functions needed to be implemented so it updates
