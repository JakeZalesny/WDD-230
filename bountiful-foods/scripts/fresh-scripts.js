const new_url = "./data/fruityvice.json";
const submit = document.querySelector("#order-info");
const fruit_1 = document.querySelector("#fruit-1-selector");
const fruit_2 = document.querySelector("#fruit-2-selector");
const fruit_3 = document.querySelector("#fruit-3-selector");

async function fetchFruit() {
    const response = await fetch(new_url);
    if(response.ok) {
        const data = await response.json(); 
        insertFruits(data.fruits);
    } else {
        console.error("There was an error loading the data");
    }
}

function insertFruits(fruitData) {
    fruitData.forEach(fruit => {
        const newOption = document.createElement("option");
        newOption.innerHTML = `${fruit.name}`;
        fruit_1.appendChild(newOption);
    });
    fruitData.forEach(fruit => {
        const newOption = document.createElement("option");
        newOption.innerHTML = `${fruit.name}`;
        fruit_2.appendChild(newOption);
    });
    fruitData.forEach(fruit => {
        const newOption = document.createElement("option");
        newOption.innerHTML = `${fruit.name}`;
        fruit_3.appendChild(newOption);
    });
}

function storeValues() {
    const first_name = document.querySelector("#first-name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const first_fruit = document.querySelector("#fruit-1-selector").value;
    const second_fruit = document.querySelector("#fruit-2-selector").value;
    const third_fruit = document.querySelector("#fruit-3-selector").value;
    
    localStorage.setItem("Name", first_name);
    localStorage.setItem("Email", email);
    localStorage.setItem("Phone", phone);
    localStorage.setItem("fruit-1", first_fruit);
    localStorage.setItem("fruit-2", second_fruit);
    localStorage.setItem("fruit-3", third_fruit);

}


submit.addEventListener("click", storeValues);

fetchFruit(); 