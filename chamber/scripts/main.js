const mytown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');
const meetingBanner = document.querySelector('#meetingBanner');
const closeBannerBtn = document.querySelector('#closeBanner');

const lat = "20.532621957800583";
const long = "-100.82044772979906";
const apiKey = '25c1c14252a4dad344c1936f506aa3ce';

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`;

async function fetchWeather() {
    try {
        const response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

async function fetchForecast() {
    try {
        const response = await fetch(forecastURL);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayWeather(data) {
    mytown.textContent = data.name;
    myDescription.textContent = data.weather[0].description;
    myTemperature.innerHTML = data.main.temp + "°C";
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    myGraphic.setAttribute('src', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}

function displayForecast(data) {
    // Aquí debes manejar los datos de pronóstico y mostrarlos en la página
    
}

fetchWeather();
fetchForecast();

// Mostrar el banner solo los lunes, martes y miércoles
const currentDate = new Date();
const currentDay = currentDate.getDay();
if (currentDay >= 1 && currentDay <= 3) {
    meetingBanner.style.display = 'block';
}

// Permitir al usuario cerrar el banner
closeBannerBtn.addEventListener('click', () => {
    meetingBanner.style.display = 'none';
});
