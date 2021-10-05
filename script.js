// grabbing HTML elements
var inputText = document.getElementById("inputCity")
var button = document.getElementById("button-addon2");
var fiveDay = document.getElementById("five_day")
var weatherDetail = document.getElementById("weather_detail")
var resultList = document.getElementById("resultList")

// global assignments
var finalValue = [];

let savedCities = localStorage.getItem('savedCities') ? JSON.parse(localStorage.getItem('savedCities')) : []

// displays local storage items on webpage
for (let i = 0; i < savedCities.length; i++) {
    createItemFromStorage(savedCities[i])
}


// Added the event listener for when the submit button is pressed
button.addEventListener("click", function () {
   
    var inputGlobal = inputText.value;
    dataInput(inputGlobal);
    dataInput2(inputGlobal);

})

// created function to handle adding data to local storage dynamically
function createItemFromStorage(value) {

    var btn_city = document.createElement("button")
    btn_city.classList.add("btn-secondary")
    btn_city.textContent = value;
    resultList.appendChild(btn_city)
    var buttonPress = document.getElementsByClassName("btn-secondary");
    
    buttonPressing(buttonPress);
    
}
// Created function when any of the stored city buttons is press it will send the city to the fetch method
function buttonPressing(buttonPress) {
    for (let i = 0; i < buttonPress.length; i++){
        buttonPress[i].addEventListener("click", function (event) {
            dataInput(event.target.textContent)
            dataInput2(event.target.textContent)
        })
    }
 
}