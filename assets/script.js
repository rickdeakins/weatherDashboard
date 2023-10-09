//Assigning global variables
var cityName = document.querySelector('#cityinput');
//var button = document.querySelector('#add');
var submitButton = document.querySelector("#search-btn");
var cityDisplay = document.querySelector('#cityoutput');
var temp = document.querySelector('#temp');
var wind = document.querySelector('#wind');
var humidity = document.querySelector('#humidity');
var APIKEY = "ff7b51604823cd4027c9381ce6af58ce";
var cityName = "Cleveland"//document.getElementById("search-form").value;
var weatherData;

////Fetch API 
function fetchData(){
    var fetchUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + "ff7b51604823cd4027c9381ce6af58ce" + "&units=imperial";

    ;
    
    fetch(fetchUrl).then(
        function (res){
        return res.json()
    })
    .then(function (data){
        console.log(data);
        var weatherData = data.list.map(function (forecast) {
            return {
              date: forecast.dt_txt,  
              temp: forecast.main.temp,
              humidity: forecast.main.humidity,
              speed: forecast.wind.speed,
            };
          });
    
          console.log(weatherData);
        });
}

//Display the data fetched from the API on the page
var temperatureElement = document.getElementsByClassName("weatherData");

//Current Day = 0
temperatureElement.innerHTML = "Date: " + weatherData[0].dt_txt;
temperatureElement.innerHTML = "Temperature: " + weatherData[0].temp;
temperatureElement.innerHTML = "Humidity: " + weatherData[0].humidity;
temperatureElement.innerHTML = "Speed: " + weatherData[0].speed;
//1 day out = 7
temperatureElement.innerHTML = "Date: " + weatherData[7].dt_txt;
temperatureElement.innerHTML = "Temperature: " + weatherData[7].temp;
temperatureElement.innerHTML = "Humidity: " + weatherData[7].humidity;
temperatureElement.innerHTML = "Speed: " + weatherData[7].speed;
//2 days out = 15
temperatureElement.innerHTML = "Date: " + weatherData[15].dt_txt;
temperatureElement.innerHTML = "Temperature: " + weatherData[15].temp;
temperatureElement.innerHTML = "Humidity: " + weatherData[15].humidity;
temperatureElement.innerHTML = "Speed: " + weatherData[15].speed;
//3 days out = 23
temperatureElement.innerHTML = "Date: " + weatherData[23].dt_txt;
temperatureElement.innerHTML = "Temperature: " + weatherData[23].temp;
temperatureElement.innerHTML = "Humidity: " + weatherData[23].humidity;
temperatureElement.innerHTML = "Speed: " + weatherData[23].speed;
//4 days out = 31

temperatureElement.innerHTML = "Date: " + weatherData[31].dt_txt;
temperatureElement.innerHTML = "Temperature: " + weatherData[31].temp;
temperatureElement.innerHTML = "Humidity: " + weatherData[31].humidity;
temperatureElement.innerHTML = "Speed: " + weatherData[31].speed;

// Call the fetchData function
fetchData();