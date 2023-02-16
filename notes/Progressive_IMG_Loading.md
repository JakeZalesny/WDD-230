# Progressive Image Loading
* Technique to load images on demand rather than immediately. 
* Intersection Observer is actually an API
* There are a lot of uses for intersection observers
* infinite scroll is made possible by intersection observers. 
* Intersection observers have a time element. 

# LocalStorage in JavaScript
* Specific to web browsers. 
* Typically stores Key / Value pair string data types. 
* Max size 5 MB
* Specific to your system. 
* Don't store passwords in local storage... you need to hash stuff. 
* Don't ever put user tokens in user storage. It can be inspected. 

```js
const MILLIS_PER_DAY = 24 * 60 * 60 * 1000; 
//represents # of miliseconds from Jan 1, 1970
let today = new Date(); 
let lastVisitString = localStorage.getItem("lastVisit");
let visitspan = document.querySelector('#days-since-visit');
if(lastVisitString == null) {
    visitspan.textContext = "0";
}

else{
    lastVisitDate = new Date(lastVisitString);
    daysSinceLastVisit = Math.floor((today.getTime() - lastVisitDate.getTime()) / MILLIS_PER_DAY);
    visitspan.textContext = daysSinceLastVisit; 
}
localStorage.setItem(daysSinceLastVisit);

```
# Intersection Observers and Source Sets: 
* Everything loads when you use them together
* It causes double loading with these. 
