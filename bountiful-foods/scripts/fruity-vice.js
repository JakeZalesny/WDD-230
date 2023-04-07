const url = "./data/fruityvice.json";
const orderButton = document.querySelector("#order-button");
const order = document.querySelector("#order");

async function fetchFruit() {
    const response = await fetch(url);
    if(response.ok) {
        const data = await response.json(); 
        randomFruits(data.fruits);
    } else {
        console.error("There was an error loading the data");
    }
}


function randomFruits(fruitData) {
    const fruits = document.querySelector("#fruity-icons");
    const fruit_text = document.querySelector("#fruity-text");
    let main_fruits = [];
    for(let i=0; i < 3; i++) {
        var elt = Math.floor(Math.random() * 36);
        console.log(elt);
        main_fruits.push(fruitData.splice(elt, 1)[0]);
    }
    fruit_count = 1; 
    main_fruits.forEach(fruit => {
        const newDiv = document.createElement("div");
        const textDiv = document.createElement("div");
        newDiv.classList.add(`fruit-${fruit_count}`);
        textDiv.classList.add(`fruit-${fruit_count}-text`);
        fruit_count++;
        if(fruit_count != 4) {
            newDiv.innerHTML = `
            <img src="${fruit.img}" alt="${fruit.name}-img" loading="lazy">
            <h1>+</h1>`;
        }
        else {
            newDiv.innerHTML = `<img src="${fruit.img}" alt="${fruit.name}-img" loading="lazy">`;
        }
        fruits.append(newDiv);
        textDiv.innerHTML = `
        <h3>${fruit.name}</h3>
        <h4>Carbohydrates: ${fruit.nutritions.carbohydrates}</h4>
        <h4>Protein: ${fruit.nutritions.protein}</h4>
        <h4>Fat: ${fruit.nutritions.fat}</h4>
        <h4>Calories: ${fruit.nutritions.calories}</h4>
        <h4>Sugar: ${fruit.nutritions.sugar}</h4>
        `
        fruit_text.append(textDiv);

    });

}

// function updateSpecialtyCount() {
//     var currentAmount = localStorage.getItem("specialty-count");
//     if(localStorage.getItem("specialty-count") == null) {
//         localStorage.setItem("specialty-count", 1); 

//     }
//     else {
//         var amtInt = parseInt(currentAmount);
//         amtInt += 1;
//         localStorage.setItem("specialty-count", amtInt);
//     }
// }

function getSpecialtyCount() {
    // console.log(`Count: ${localStorage.getItem("specialty-count")}`);
    // console.log(typeof(localStorage.getItem("specialty-count")));
    // console.log(localStorage.getItem("specialty-count"));
    if(localStorage.getItem("specialty-count") == null) {
        localStorage.setItem("specialty-count", 1);
    }
    else {
       var currCount = parseInt(localStorage.getItem("specialty-count"));
        currCount += 1;
        console.log(`currCount = ${currCount}`);
        localStorage.setItem("specialty-count", currCount);
        console.log(`updatedCount = ${localStorage.getItem("specialty-count")}`);
    } 
}

function storeFruits() {
    let fruitCount = 1; 
    main_fruits.forEach(fruit => {
        localStorage.setItem(`fruit-${fruitCount}`, fruit.name);
    })
}

function displayCount() {
    const pastOrders = document.querySelector("#past-orders");
    if(localStorage.getItem("specialty-count") == null) {
        pastOrders.innerHTML = `<h3>Amount of Past Orders: 0</h3>`;    
    }
    
    else {
        pastOrders.innerHTML = `<h3>Amount of Past Orders: ${localStorage.getItem("specialty-count")}</h3>`; 
    }
}

order.addEventListener("click", getSpecialtyCount); 
order.addEventListener("click", storeFruits);

displayCount();
fetchFruit();