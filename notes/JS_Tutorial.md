# JavaScript Notes 
* Use defer tags 
* Accessing DOM using: 
```js
document.querySelector()
```
* Select things
* Items in the same class, come back as an array
 ```html
 <span id= "today"> 
 ```
* Demo: 

```js 
const today = new Date(); 
``` 
^ I'm not going to reassign that, it's a date and it will always be a date 

```js 
let today = new Date(); 
```
^ let means you can reassign it. 

```js 
document.querySelector('#today').textContent = today.toLocaleDateString('en-US', dateoptions); 
```
^ querySelector lets you select something by id or class. textContent sets the text in the span tag 
```js 
const dateoptions = {
    year: '2-digit', 
    month: 'numeric', 
    day: 'numeric', 
}
document.getElementById('today').textContent = today.toLocaleDateString('en-US', dateoptions);
```

^ getElementById only selects one ID, querySelector can select multiple 

```js
document.getElementById('today').textContent = today.toLocaleTimeString('en-US', dateoptions)
```
^ this is a sort of last modified 

```js 
//Old way to do it: 
//Months are 0 based, you'll need to add one. 
const mydatestring = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
document.querySelector('#today').textContent = mydatestring; 
```

```js 
document.querySelector('#temp').textContent = '32&deg;';
// ^will literally put the string

document.querySelector('#temp').innerHTML = '32&deg;'; 
// ^is going to display 32 with the degree symbol, parses through the string and looks for HTML symbols

```

```html
<form action="#">
    This form has no purpose <input type="text" id="myinput">
</form>

```
```js
document.querySelector('#myinput').value = 'Carpe Diem!'; 
```
^ this will change the initial value in the box for the form. 

```js 
function makeRed(item) {
    item.style.color = 'red'; 
}

document.querySelectorAll(".somecontent").forEach(makeRed);
```

^ this selects all items in the class and then calls the function 
```js 
makeRed() 
```
on each of them, the 
```js 
.forEach() 
```
method is what goes through each of the items in the array that is returned by the query selector. 
