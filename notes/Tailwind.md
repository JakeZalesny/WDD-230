# Tailwind CSS
- Basically doing CSS in HTML instead of a separate style sheet
- It's like built-in methods for CSS
- Tailwind works with newer frameworks like React, node, and 
- Tailwind is overtaking styled components. 

## Final Project Notes & Things to do: 
- Basically going to need to do everything that we've done this semester. 

### DESIGN THOUGHTS: 
- Big banner image that covers most of the screen 
- Drop in with three about us cards 
- Random drink of 3 fruits and a "TRY ME" Button. 
- Order confirmation page. 
- Cartoony sort of feel to it. 
- fruityvice.com. 
- Attribute API information. 
- Last modified date powered by JS
- Wayfinding: Showing the user which area they're in. 

```js
let url = new URL(window.location);
let params = url.searchParams; 

for (const p of params) {
    console.log(p);
}

document.querySelector("#yourname").textContent = params.get("name");

document.querySelector("#yourfood").textContent = params.get("food"); 

document.querySelector("#yourgender").textContent = params.get("gender");

```