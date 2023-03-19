const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const windChill = document.querySelector('#windchill');
const captionDesc = document.querySelector('figcaption');
const windSpeed = document.querySelector('#windspeed');

const lat = '47.9790';
const lon = '-122.2021';
const APIkey = 'e4c19171f0361e7e5340d9c9ef1ccd92'

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = await response.json(); 
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch(error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    let windspeed = weatherData.wind.speed.toFixed(0);
    let temperature = weatherData.main.temp.toFixed(0);
    currentTemp.innerHTML= `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(0)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

    const desc = weatherData.weather[0].description; 
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherIcon.setAttribute('loading', 'lazy');
    captionDesc.textContent = desc; 

    
    if(temperature <= 50 && windspeed > 3) {
        let chill = Math.round((35.74 + (0.6215 * temperature))-(35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16)));
        // if `${chill}deg&;` use windchillobj.innerHTML
        windChill.innerHTML = `<strong>${chill}</strong>`;
        console.log(chill);

    }

    else {
        let chill = 0; 
        windChill.innerHTML = `<strong>${chill}</strong>`;
    }
}

apiFetch(); 