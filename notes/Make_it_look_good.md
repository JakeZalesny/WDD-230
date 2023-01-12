# Responsive Web Design
* Enables web design to fit the screens of different devices 
* Avoid making people scroll sideways on the web. 

* Progressive Advancement: Start with the phone and then go to tablet, then PC

* Graceful Degredation: The opposite way around. 

* "Mobile First": Mobile starts and then we expand into the tablet and desktop. 

# Why Mobile First? 
1. Mobile internet usage has surpassed desktop usage in 2016. 
2. People have spent more time on the internet. 
3. Early in 2012, smartphones sales have overtaken PC sales. 
4. Google predominantly uses the version of a site's content for indexing and ranking. 
    * This is called mobile first indexing. 

# Responsive Design: Media Queries
Example: 
```css
@media screen and (min-width: 640px) {
    h1 {
        font-size: 2.5rem; 
        margin: 1rem; 
        color: navy; 
    }
}
```
* This can be done in a separate file or at the bottom of the CSS file. 
* Separate files are going to be used for the class. 