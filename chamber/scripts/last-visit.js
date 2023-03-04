const MILLIS_PER_DAY = 24 * 60 * 60 * 1000; 
//represents # of miliseconds from Jan 1, 1970
let today = new Date(); 
let lastVisitString = localStorage.getItem("lastVisit");
let visitspan = document.querySelector('#days-since-last-visit');
if(lastVisitString == null) {
    visitspan.textContext = "0";
}

else{
    lastVisitDate = new Date(lastVisitString);
    var daysSinceLastVisit = Math.floor((today.getTime() - lastVisitDate.getTime()) / MILLIS_PER_DAY);
    visitspan.textContent = daysSinceLastVisit;
    console.log(daysSinceLastVisit); 
}
localStorage.setItem("lastVisit", lastVisitString);
// visitspan.textContent = "1";