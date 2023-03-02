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
}

gridSelector.addEventListener('click', () =>{
    if(!gridSelector.classList.contains('active')){
        gridSelector.classList.add('active');

    }
})

const displayBusinesses = (businesses) => {
    const cards = document.querySelector(".directory-cards") //select the container element for the layout. 

    
}
//use a repeat(auto-fit, minmax(350px, 1fr))