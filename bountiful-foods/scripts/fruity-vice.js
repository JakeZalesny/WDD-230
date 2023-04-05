const url = "./data/fruityvice.json";
// let search_url = `https://search.icons8.com/api/iconsets/v5/search?term=${fruit}&amount=60&offset=0&platform=all&language=en-US&authors=all&isOuch=true`;
// let icon_url = `https://api.shutterstock.com/v2/images/search?api_key=MLa2hWWDMYfIVFECUBrdw0SuC74epdjK&orientation=vertical&image_type=vector&aspect_ratio_min=0.5&aspect_ratio_max=1.7&language=en&query=icon+${fruit}+NOT+set+NOT+pack`;


async function fetchFruit() {
    const response = await fetch(url);
    if(response.ok) {
        const data = await response.json(); 
        console.log(data);
        randomFruits(data.fruits);
    } else {
        console.error("There was an error loading the data");
    }
}


function randomFruits(fruitData) {
    const fruits = document.querySelector("#fruity-icons");
    console.log(typeof(fruitData));
    let main_fruits = [];
    for(let i=0; i < 3; i++) {
        var elt = Math.floor(Math.random() * 40);
        console.log(elt);
        main_fruits.push(fruitData.splice(elt, 1)[0]);
    }
    console.log(main_fruits);
    fruit_count = 1; 
    main_fruits.forEach(fruit => {
        const newDiv = document.createElement("div");
        newDiv.classList.add(`fruit-${fruit_count}`);
        fruit_count++;
        newDiv.innerHTML = `<h3>${fruit.name}</h3>`
        fruits.append(newDiv);
    });

}

fetchFruit(); 