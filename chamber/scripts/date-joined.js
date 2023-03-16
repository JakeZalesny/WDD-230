const todaysDate = new Date(); 

let day = todaysDate.getDay(); 
let month = todaysDate.getMonth() + 1; 
let year = todaysDate.getFullYear(); 

let currDate = `${day}-${month}-${year}`;

document.querySelector("#curr_date").value = currDate; 

console.log(currDate);