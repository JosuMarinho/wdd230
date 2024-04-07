
//SELECT HTML ELEMENTS IN THE DOCUMENT
const mytown = document.querySelector('#mytown');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myGraphic = document.querySelector('#graphic');

//CREATE REQUIRED VARIABLES FOR THE URL
const lat = "20.532621957800583";
const long = "-100.82044772979906";
const apiKey = '25c1c14252a4dad344c1936f506aa3ce';

//CONSTRUCT A FULL PATH USING TEMPLATE LITERALS

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=imperial`;


async function apiFetch() {
    try {
      const response = await fetch(myURL);
      if (response.ok) {
        const data = await response.json();
        
        displayResults(data)
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayResults(data) {
    
    mytown.innerHTML = data.name;
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = "${data.main.temp}&deg;F";
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    myGraphic.setAttribute = ('src', iconsrc);
    myGraphic.setAttribute = ('alt', data.weather[0].description);
  }
    
  apiFetch();