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


 $.get("http://api.openweathermap.org/data/2.5/weather?q=London&APPID=c0c1146523134c21458501cd8b2ee3dc&units=metric", function(response){
   console.log(response);
   console.log(response.main.temp)
   console.log(response.weather[0].description)
 });


});

// check mode and check usage functions needed to be implemented so it updates
