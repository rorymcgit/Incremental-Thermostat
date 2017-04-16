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
   $('#temperature').text(thermostat.checkCurrentTemperature() + "°C");
   $('#usage').text(thermostat.checkUsage());
  //  $('#ps').text(thermostat.checkMaxTemp());
 };

$("#location-form").on('submit', function(){
  event.preventDefault()
  var url = "http://api.openweathermap.org/data/2.5/weather?q=" + $('#value').val() + "&APPID=c0c1146523134c21458501cd8b2ee3dc&units=metric";
  $.get(url, function(response){
    console.log(url);
    $('#location-temp').text(response.main.temp + "°C")
    $('#weather-description').text(response.weather[0].description)
  })
})

});
