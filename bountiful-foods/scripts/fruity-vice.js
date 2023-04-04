const url = "./data/fruityvice.json";

async function fetchFruit() {
    try {
        const response = await fetch(url);
        if(response.ok) {
            const data = response.json();
            randomFruits(data)
            console.log(data);
        }

        else {
            throw Error(await response.text());
        }
    }
    catch(error) {
        console.log(error);
    }
}

function randomFruits(fruitData) {
    const fruits = document.querySelector("#fruity-icons");
    main_fruits = [];
    for(let i=0; i <= 3; i++) {
        var elt = Math.floor(Math.random() * fruitData.length);
        main_fruits.push(fruitData.splice(elt, 1)[0]);
    }
    fruit_count = 1; 
    main_fruits.forEach(fruit => {
        const newDiv = document.createElement("div");
        newDiv.classList.add(`fruit-${fruit_count}`);
        fruit_count++;
        newDiv.innerHTML = ``
    });

}

fetchFruit(); 