// grabbing HTML elements
var inputText = document.getElementById("inputCity")
var button = document.getElementById("button-addon2");
var fiveDay = document.getElementById("five_day")
var weatherDetail = document.getElementById("weather_detail")
var resultList = document.getElementById("resultList")

// global assignments
var finalValue = [];

let savedCities = localStorage.getItem('savedCities') ? JSON.parse(localStorage.getItem('savedCities')) : []