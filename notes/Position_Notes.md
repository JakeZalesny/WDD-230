# Position
```css
.parent {
    position: relative; 
}

.child {
    position: absolute; 
    bottom: 25px; 
    right: 25px; 
}
```

# Hover
* Alpha is a value between 0-1 that describes the brightness of an item. 1 is the darkest, 0 is the brightest. 

Meet and greet script for mon and tues
div with an id as a placeholder and announcement text. 

```js
var messageDate = new Date(); 
if(messageDate.getDay()==1 || messageDate.getDay()==2){
    document.querySelector("#meet-greet").classList.add('active');
}
```

