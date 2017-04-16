# Thermostat

In this implementation of the Makers Academy Week 5 Thermostat Challenge the user clicks a button to increase/decrease the temperature by a degree at a time.  
The user can enter their current city in and the openweathermap API will return the outside temperature and weather conditions.

* Thermostat starts at 20 degrees
* You can increase/decrease the temperature by a degree at a time
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* If power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20° with the reset button
* The thermostat displays its current energy usage:  
< 18° is low-usage  
< 25° is medium-usage  
\>= 25° is high-usage.

#### Instructions for use:
- Clone this repo
- In your browser, open ```SpecRunner.html``` to view tests
- In your browser, open ```views/index.html``` to view app
- Enter your current location (nearest city)
- Increase/decrease to desired temperature, set power saving mode off/on (click the green leaf), reset the temperature to default

![thermostat moscow](https://github.com/rorymcgit/js_thermostat/blob/master/Thermostat_moscow.png)

#### Technologies used:
- JavaScript
- JQuery
- Jasmine
- Open Weather Map API
- (HTML/CSS)
