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
* The longer it takes for your website to load the more money you lose. 

# Design Principles
1. Contrast & Emphasis, draw attention. 
2. Color: Analagous, Complimentary. 
3. Color attracts and focuses attention and conveys meeting
4. Visual Balance: Makes the message clear, Symmetry and Asymmetry. Objects have more impact when they are given room to breathe!
5. Proportion: the relation between elements and the size. Fibonnacci sequences can help you get the right size for anything. 
6. Rule of Thirds: Not a hard and fast rule, but still useful. 
7. Alignment and Proximity: bring order to design. Off centering things can cause a focus on the thing that's off centered. 
8. Repetition: engages viewers and creates emphasis. 
9. Consistency: Looks, Acts, and Functions as it should every time. People trust it. 

# Saturday Assignment: Design Principles Document
* In the new folder lesson 2
* Identify websites that use the principles we've talked about today. 
* Have a div per website. 
* Text on how or why this principle is demonstrated. 
* USE A GRID LAYOUT FOR THIS ONE!!
* Mobile view screenshot. 
* Tablet view should be double small view, and pc should be double tablet
* Mobile 500-600, Tablet 800-900, 

# Grid Layout
* Link to this stuff in the slides for today. 
```css 
body {
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr;
    /*Use this to divide in the assignment.*/
    grid-template-areas: "s1 s1"
                         "s2 s3"; 
}

#section1 {
    grid-area: s1; 
}

#section2 {
    grid-area: s2; 
}

#section3 {
    grid-area: s3; 
}
/*Each area is assigned to the the template areas in the grid template areas*/
```