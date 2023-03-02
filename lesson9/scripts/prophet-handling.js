const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json"

async function getProphetData() {
    const response = fetch(url);
    if(response.ok) {
        const data = await response.json();
        displayProphets(data.prophets);
    }
}

getProphetData(); 

const displayProphets = (prophets) => {
    const cards = document.querySelector("div.cards");
    prophets.forEach(prophet => {
        let card = document.createElement("section");
        card.innerHTML = `<h2> ${prophet.name} ${prophet.lastname}</h2>
        <h3>Date of Birth: ${prophet.birthdate}</h3>
        <h3>Place of Birth: ${prophet.birthplace}</h3>
        <img src="${prophet.imageurl}" height="440px" width="340px" loading="lazy" alt="Portrait of ${prophet.name} ${prophet.lastname}">`;
        cards.appendChild(card);
    });
}