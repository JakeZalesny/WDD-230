# Responsive Images
* Image optimization is key to reducing website weight. 
* More modern formats: WebP, AVIF
* Older Formats: PNG, JPEG, GIF. 

### Event Listeners: 
* Ex: 
```js 
var x = document.querySelector("#my-id");
x.addEventListener("click", myFunction);

function myFunction() {
    var element = document.querySelector("#my-id");
    element.innerHTML += "Hello World"; 
}
```
* The plus equals is an apperand. It adds it to a previous line of code. 

### Content Management Systems (CMS)
* Someone asked us to build a website and they don't know how to maintain it. 
* Maintenance is done through CMS' typically. 
* WordPress is a good one. 
* It's beneficial to know about these. 


## This week's assignment: 
* Optimize Images to help with performance. 
* Replace image with instructions image. 
* Create 3 different sizes for each size. 
* Responsive images.
* Watermark the images too. ^^ 
* Change it to a .webp. 

```html 
<picture>
    <source media="(max-width:400px)" srcset='./images/...'/>
    <source media="(max-width:600px)" srcset="./images/..."/>
    <img src="./images/..." alt="image here"/>
</picture>
<!--Go Least to greatest so that they're ordered correctly-->
```
* If I did this with only CSS, it would be heavier and take longer to load. 
