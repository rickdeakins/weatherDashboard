//Assigning global variables
var cityName = document.querySelector('.search-form');
//var button = document.querySelector('#add');
var submitButton = document.querySelector(".search-btn");
var cityDisplay = document.querySelector('#cityoutput');
var temp = document.querySelector('#temp');
//var wind = document.querySelector('#wind');
//var humidity = document.querySelector('#humidity');
var APIKEY = "ff7b51604823cd4027c9381ce6af58ce";
//var cityName = "Cleveland"//document.getElementById("search-form").value;
var weatherData;

//Obtaining Geocoding data based on City entered into search
function getGeo(city){
  var reqGeoUrl= "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=5&appid=" + APIKEY
fetch(reqGeoUrl)
  .then(response =>response.json())
  .then(data =>{
    console.log(data)
    var lat = data[0].lat
    var lon = data[0].lon
    var currentCity = data[0].name 
  getWeather(lat,lon,currentCity)
  })
}

//Obtaining weather data from OpenWeather API and appending to page
function getWeather(lat,lon,currentCity){
var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKEY}`
fetch(weatherUrl)
.then(response =>response.json())
  .then(data =>{
    console.log(data)
    var card = $("<div>").addClass("card")
    var cardBody = $("<div>").addClass("card-body")
    var cardTitle = $("<h2>").addClass("card-title").text(currentCity + ": ")//add weather parameters to this line starting with .
    //creating Variables to append to dashboard with weather data 10/15
    //var currentTemp = $("<h4>").addClass("card-temp").main.temp  
    var currentTemp = data["main"]["temp"]
    var currentTmpEle = $("<h4>").addClass("card-body").text("Current Temperature: " + currentTemp + "°");
    var currentHumidity = data.main.humidity
    var currentHumidEle = $("<h4>").addClass("card-body").text("Current Humidity: " + currentHumidity + "%")  
    var currentWindData = data.wind.speed
    var currentWindEle = $("<h4>").addClass("card-body").text("Wind Speed: " + currentWindData + 'mph')  

    //appending variables to dashboard
    //$(".current").append(card.append(cardBody.append(cardTitle)))
    //appending weather attributes to dashboard
    $(".current").append(card.append(cardBody.append(cardTitle)))
    $(".current").append(card.append(cardBody.append(currentTmpEle)))  
    $(".current").append(card.append(cardBody.append(currentHumidEle)))
    $(".current").append(card.append(cardBody.append(currentWindEle)))
    //$(".current").append(card.append(cardBody.append(cardTitle.append(currentTemp.append(currentHumid.append(currentWind))))))
  })

}
//10/19/23
//forecast for 5 days - forecast api response 
//determine how data is nested and adjust acordingly - repeat 5 times 

function getForecast(lat,lon,currentCity){
  var weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKEY}`
fetch(weatherUrl)
  .then(response =>response.json())
  .then(data =>{
    console.log(data)
    var forecastCard = $("<div>").addClass("forecastCard")
    var forecastCardBody = $("<div>").addClass("card-body2")
    var forecastCardTitle = $("<h2>").addClass("card-title").text(currentCity + ": ")
    var forecastTemp = data["main"]["temp"]
    var forecastTmpEle = $("<h4>").addClass("card-body2").text("Current Temperature: " + forecastTmp + "°");
    var forecastHumidity = data.main.humidity
    var forecastHumidEle = $("<h4>").addClass("card-body2").text("Current Humidity: " + forecastHumidity + "%")  
    var forecastWindData = data.wind.speed
    var forecastWindEle = $("<h4>").addClass("card-body2").text("Wind Speed: " + forecastWindData + 'mph')
    $(".forecast").append(forecastCard.append(cardBody.append(cardTitle)))
    $(".forecast").append(forecastCard.append(cardBody.append(forecastTmpEle)))  
    $(".forecast").append(forecastCard.append(cardBody.append(forecastHumidEle)))
    (".forecast").append(forecastCard.append(cardBody.append(forecastWindEle)))  
  
  })



}
//review api call - for forecast select same hour for each day - data will be nested differently
//elements to card div - 5 diff elements looped  
//final call to append to forecast div


submitButton.addEventListener("click", 
  function(){
    var city= cityName.value
    console.log(city)
    getGeo(city)
  }
)

// //Fetch Weather API 
// function fetchData(){
//     var fetchUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + "ff7b51604823cd4027c9381ce6af58ce" + "&units=imperial";
    
//     fetch(fetchUrl)
//       .then(function (res){
//         return res.json()
//     })
//     .then(function (data){
//         console.log(data);
//         var weatherData = data.list.map(function (forecast) {
//             return {
//               date: forecast.dt_txt,  
//               temp: forecast.main.temp,
//               humidity: forecast.main.humidity,
//               speed: forecast.wind.speed,
//             };
//           });
    
//           console.log(weatherData);
//         });
// }

    // //Display the data fetched from the API on the page
    // var targetElement = document.getElementsByClassName("weatherData");
    // targetElement.innerHTML = "";
    // var dateHTML = document.createElement("h4");
    // dateHTML.textContent = "Date: " + date;
    // var tempHTML = document.createElement("h4");
    // tempHTML.textContent = "Temperature: "+ temp;
    // var humidityHTML = document.createElement("h4");
    // humidityHTML.textContent = "Humidity: " + humidity;
    // var speedHTML = document.createElement("h4");
    // speedHTML.textContent = "Speed: " + speed;
    // targetElement.appendChild(dateHTML);
    // targetElement.appendChild(tempHTML);
    // targetElement.appendChild(humidityHTML);
    // targetElement.appendChild(speedHTML);


//Current Day = 0
// temperatureElement.innerHTML = "Date: " + weatherData[0].dt_txt;
// temperatureElement.innerHTML = "Temperature: " + weatherData[0].temp;
// temperatureElement.innerHTML = "Humidity: " + weatherData[0].humidity;
// temperatureElement.innerHTML = "Speed: " + weatherData[0].speed;
// //1 day out = 7
// temperatureElement.innerHTML = "Date: " + weatherData[7].dt_txt;
// temperatureElement.innerHTML = "Temperature: " + weatherData[7].temp;
// temperatureElement.innerHTML = "Humidity: " + weatherData[7].humidity;
// temperatureElement.innerHTML = "Speed: " + weatherData[7].speed;
// //2 days out = 15
// temperatureElement.innerHTML = "Date: " + weatherData[15].dt_txt;
// temperatureElement.innerHTML = "Temperature: " + weatherData[15].temp;
// temperatureElement.innerHTML = "Humidity: " + weatherData[15].humidity;
// temperatureElement.innerHTML = "Speed: " + weatherData[15].speed;
// //3 days out = 23
// temperatureElement.innerHTML = "Date: " + weatherData[23].dt_txt;
// temperatureElement.innerHTML = "Temperature: " + weatherData[23].temp;
// temperatureElement.innerHTML = "Humidity: " + weatherData[23].humidity;
// temperatureElement.innerHTML = "Speed: " + weatherData[23].speed;
// //4 days out = 31

// temperatureElement.innerHTML = "Date: " + weatherData[31].dt_txt;
// temperatureElement.innerHTML = "Temperature: " + weatherData[31].temp;
// temperatureElement.innerHTML = "Humidity: " + weatherData[31].humidity;
// temperatureElement.innerHTML = "Speed: " + weatherData[31].speed;

// Call the fetchData function
//fetchData();

