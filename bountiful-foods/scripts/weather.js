const lat = '33.1481';
const lon = '-117.3506';
const APIkey = 'e4c19171f0361e7e5340d9c9ef1ccd92';

const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}&units=imperial`;

async function apiFetch() {
    const response = await fetch(weatherurl);
    if(response.ok) {
        const data = await response.json();
        getWeather(data);
        console.log(data);
    }
    else {
        throw Error(await response.text());
    }
}

function getWeather(data) {
    const forecast = document.querySelector("#forecast");
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}" loading="lazy">
    <h3>Current Temperature: ${data.main.temp.toFixed()}&deg;F
    <h3>Feels Like: ${data.main.feels_like.toFixed()}&deg;F</h3>
    <h3>Condition: ${data.weather[0].description}
    <h3>Humidity: ${data.main.humidity}%`;

    forecast.append(newDiv);
}

apiFetch();