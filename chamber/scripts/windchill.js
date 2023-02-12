function showWeather(temp, windspeed){
    //get references to placeholders in the page. 
    tempuraturespan = document.querySelector("#temperature");
    windspeedspan = document.querySelector("#windspeed"); 
    windchillspan = document.querySelector("#windchill");
    //calculate the windchill or N/A
    let windchill = "N/A"
    if(temp <= 50 && windspeed > 3) {
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16)));
        windchill = `${chill}`;
        // if `${chill}deg&;` use windchillobj.innerHTML; 
    }
    //Update the placeholder values. 
    tempuraturespan.textContent = temp; 
    windspeedspan.textContent = windspeed; 
    windchillspan.textContent = windchill; 
}

showWeather(5, 5);