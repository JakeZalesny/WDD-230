# CSS Specificity and Redundancy
1. IDs
2. Classes
3. Types

* The last one typed will be the one registered. 
* Redundancy slows everything down and leads to unused code. 
* CSS takes whatever is last, it'll be overriden by whatever is written later in the file or in other files. 

# Pseudo Elements and Classes
* CSS PseudoElements create new elements as if you created a new HTML Element
*Pseudoclasses select elements in a specific state. 

```css
:lang(esp) {
    acts based on the language selected
}

a:visited {
    acts based on whether or not the person clicked on the element. 
}

/*Puts the content after the statement.  */
h3::after {
    content: " = I like food"; 
    color: black; 
}

::selection {
    changes the color of a highlight. 
}
```

# Lazy Loading & Cummulative Layout Shift
* You want a low Cummulative Layout Shift. 
* To be delightful you need no lag and no jank.
* CLS causes a really crummy user experience. 
* Redundancy in CSS can cause this. 
* Long loading times causes CLS 
* Images cause this too. 
* Placeholder information can stop CLS 

Ex. Easy way to do it. 
```html
<!--You have to have the height and width tags.-->
<img src="..." loading="lazy" height="800" width="600">
```

* Fold is the bottom of the screen. 
* If you don't specifiy height and width its going to assume that they're all 1 pixel high and above the fold so they load immediately. 
* Blur effect for loading

* We do placeholders because they're smaller images and quicker to load, and once they're loaded they're in your cache. 
```html
<img src="./img/placeholder.png" data-src="./img/actual-img.png">
```

```js
//Gets all images to load
let imagesToLoad = document.querySelectorAll("img[data-src]");

// this does the swapping
const loadImages = (image) => {
    image.setAttribute("src", image.getAttribue("data-src"));
    image.onLoad = () => {
        image.removeAttribute("data-src");
    };
};

// Add an intersection observer
const callback = (items, observer) => {
    items.forEach((item) => {
        if (item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
        }
    });
};

// Set up Options
let options = {
    threshold: 0.1; 
}

//Create an observer
// Main job is to look for changes on the screen. 
// Callback is what the observer will do once it sees a change. 

const observer = new IntersectionObserver(callback, options);

//Register each image with the intersection observer
// this is essentially is what observer will be looking for. 
imagesToLoad.forEach((img) => {
    observer.observe(img);
});

```
### Blur effect
```css
picture img{
    display: block; 
    filter: blur(0.0em);
    transition: filter 0.5s; 
}

picture img[data-src] {
    filter: blur(0.5em);

}
