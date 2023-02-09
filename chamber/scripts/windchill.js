function showWeather(temp, windspeed){
    //get references to placeholders in the page. 
    let tempuratureobj = document.querySelector("#temperature");
    let windspeedobj = document.querySelector("#windspeed"); 
    let windchillobj = document.querySelector("#windchill");
    //calculate the windchill or N/A
    let chillmsg = "N/A"
    if(temp <= 50 && windspeed > 3) {
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temp * Math.pow(windspeed, 0.16)));
        chillmsg = `${chill}`;
        // if `${chill}deg&;` use windchillobj.innerHTML; 
    }
    //Update the placeholder values. 
    tempuratureobj.textContent = temp; 
    windspeedobj.textContent = windspeed; 
    windchillobj.textContent = chillmsg; 
}

showWeather(5, 5);