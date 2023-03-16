const MILLIS_PER_DAY = 24 * 60 * 60 * 1000; 
//represents # of miliseconds from Jan 1, 1970
let today = new Date(); 
let lastVisitString = localStorage.getItem("lastVisit");
let visitspan = document.querySelector('#days-since-last-visit');
lastVisitDate = new Date(lastVisitString);

if(lastVisitString == null) {
    visitspan.textContext = "0";
    localStorage.setItem("lastVisit", lastVisitString);
}

else {
    var daysSinceLastVisit = Math.floor((today.getTime() - lastVisitDate.getTime()) / MILLIS_PER_DAY);
    visitspan.textContent = daysSinceLastVisit;
    localStorage.setItem("lastVisit", lastVisitString);
    console.log(daysSinceLastVisit); 
}
// visitspan.textContent = "1";