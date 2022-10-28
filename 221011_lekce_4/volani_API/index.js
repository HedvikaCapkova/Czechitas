const element = document.getElementById("myBtn");
element.addEventListener("click", displaySunTime);

const displaySun = (data) => {
    const sunsetElement = document.querySelector('.sunset');
    sunsetElement.textContent = data.results.sunset;
    const sunriseElement = document.querySelector('.sunrise');
    sunriseElement.textContent = data.results.sunrise;
}




function displaySunTime() {
    fetch("https://api.sunrise-sunset.org/json?lat=50&lng=14.5")
    .then((response) => response.json()
    ).then(displaySun);
} 


