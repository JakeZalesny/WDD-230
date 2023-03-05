var gridSelector = document.querySelector('#directory-grid');
var listSelector = document.querySelector('#directory-list');
var directoryData = document.querySelector('#directory-data');

const url = "./data/businesses.json";

async function getBusinessData() {
    const response = await fetch(url);
    if(response.ok) {
        const data = await response.json();
        displayBusinesses(data.businesses);
    }
    else {
        console.log("ERROR: failed to fetch data.")
    }
}

gridSelector.addEventListener('click', () =>{
    if(!gridSelector.classList.contains('active')){
        gridSelector.classList.add('active');
        listSelector.classList.remove('active');
        directoryData.classList.add('directory-cards');
        directoryData.classList.remove('directory-list')
        console.log("Grid Active");

    }
})

listSelector.addEventListener('click', ()=>{
    if(!listSelector.classList.contains('active')){
        listSelector.classList.add('active');
        gridSelector.classList.remove('active');
        directoryData.classList.add('directory-list');
        directoryData.classList.remove('directory-grid');
        console.log("List Active");
    }
})

const displayBusinesses = (businesses) => {
    const cards = document.querySelector(".directory-cards") //select the container element for the layout. 
    businesses.forEach((business) => {
        let card = document.createElement("section");
        card.innerHTML = `<img src="${business.img}" alt=${business.name}-image" loading="lazy">
        <h2>${business.name}</h2>
        <h3>${business.address}</h3>
        <h3>${business.number}</h3>
        <a href="${business.url}">Click here!</a>
        <h3>Membership Level: ${business.level}</h3>`
        cards.appendChild(card);
    });
    
}

getBusinessData()
//use a repeat(auto-fit, minmax(350px, 1fr))