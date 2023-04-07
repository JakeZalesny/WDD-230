const new_url = "./data/fruityvice.json";
const thank_you = document.querySelector("#thank-you");
const curr_date = new Date(); 

async function fetchFruit() {
    const response = await fetch(new_url);
    if(response.ok) {
        const data = await response.json(); 
        getOrderInfo(data.fruits);
    } else {
        console.error("There was an error loading the data");
    }
}

function getOrderInfo(fruitData) {
    var name = localStorage.getItem("Name");
    var email = localStorage.getItem("Email");
    var phone = localStorage.getItem("Phone");
    var fruit_1 = localStorage.getItem("fruit-1");
    var fruit_2 = localStorage.getItem("fruit-2");
    var fruit_3  = localStorage.getItem("fruit-3");

    const newDiv = document.createElement("div");
    nutrition_facts = []
    fruitData.forEach(fruit => {
        if(fruit.name == fruit_1 || fruit.name == fruit_2 || fruit.name == fruit_3) {
            nutrition_facts.push(fruit.nutritions);
        }
    });

    const total_carbs = nutrition_facts[0].carbohydrates + nutrition_facts[1].carbohydrates + nutrition_facts[2].carbohydrates;
    const total_protein = nutrition_facts[0].protein + nutrition_facts[1].protein + nutrition_facts[2].protein;
    const total_fat = nutrition_facts[0].fat + nutrition_facts[1].fat + nutrition_facts[2].fat; 
    const total_cals = nutrition_facts[0].calories + nutrition_facts[1].calories + nutrition_facts[2].calories; 
    const total_sugar = nutrition_facts[0].sugar + nutrition_facts[1].sugar + nutrition_facts[2].sugar;

    newDiv.classList.add("order-information");
    newDiv.innerHTML = `
    <h3>Name: ${name}</h3>
    <h3>Email: ${email}</h3>
    <h4>Phone: ${phone}</h4>
    <h4>Date: ${curr_date.getMonth()}/${curr_date.getDay()}/${curr_date.getFullYear()}</h4>
    <h5>First Fruit: ${fruit_1}</h5>
    <h5>Second Fruit: ${fruit_2}</h5>
    <h5>Third Fruit: ${fruit_3}</h5>
    <h6>Total Carbs: ${total_carbs.toFixed()}g</h6>
    <h6>Total Protein: ${total_protein.toFixed()}g</h6>
    <h6>Total Fat: ${total_fat.toFixed()}g</h6>
    <h6>Total Calories: ${total_cals.toFixed()} cals</h6>
    <h6>Total Sugar: ${total_sugar.toFixed()}g</h6>
    `
    thank_you.append(newDiv);
}

fetchFruit();