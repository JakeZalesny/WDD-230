const todaysDate = new Date(); 

let day = todaysDate.getDay(); 
let month = todaysDate.getMonth() + 1; 
let year = todaysDate.getFullYear();
let hours = todaysDate.getHours(); 
let minutes = todaysDate.getMinutes(); 

let currDate = `${day}-${month}-${year} ${hours}:${minutes}`;

document.querySelector("#curr_date").value = currDate; 

console.log(currDate);