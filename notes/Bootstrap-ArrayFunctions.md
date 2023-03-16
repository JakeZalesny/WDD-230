# Bootstrap
- Basically you can download a whole websited and modify it. 
- Pretty much you pay for templates and you can work on them. 
- Uses a 12 column grid to do what they do. 
- Twitter Bootsrap is super useful. The 12 Column grids make responsive design super easy. 

## Final Submission: 
- List of requirements on website. 
- Contact page can give you 5 extra points. 1-3 if it's crummy. 
- Make updates on the thingy. 
- Make the spotlight dynamic, list two or three companies at random. 
- We already have the JSON set up. 
```js

function displaySptolights(businessList) {
    let businessList.filter(x => x.membershipLevel == 'gold' || x.membershipLevel = 'silver'); 
    let spotlights = [];
    for(let i=0; i < 3; i++) {
        var elt = Math.floor(math.random() * business.Length)
        spotlights.push(businessList.splice(elt, 1));
    }
}
```
## Usefulness
Usefulness = Utility + Usability
