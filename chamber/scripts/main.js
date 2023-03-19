var messageDate = new Date(); 
if(messageDate.getDay()==1 || messageDate.getDay()==2){
    document.querySelector("#meet-greet").classList.toggle("active");
}

const businessURL = "./data/businesses.json";

function displayBusinesses(businessList) {
    businessList = businessList.filter(x => x.level == 'Gold' || x.level == 'Silver');
    console.log(businessList);
    spotlights = [];
    for (let i=0; i < 3; i++){
        var elt = Math.floor(Math.random() * businessList.length)
        spotlights.push(businessList.splice(elt, 1)[0]);
      }
    var mainSpotlight = document.querySelector("#spotlights");
    spotlightCount = 1; 
    spotlights.forEach(spotlight => {
        const newDiv = document.createElement("div")
        newDiv.classList.add(`spotlight-${spotlightCount}`);
        spotlightCount++; 
        newDiv.innerHTML = `<h2>${spotlight.name}</h2>
        <a href="${spotlight.url}"><img src="${spotlight.img}" loading = "lazy"></a>
        <p>${spotlight.address}</p>
        <p>${spotlight.number}</p>`
        mainSpotlight.append(newDiv);
    });

}

async function getBusinessData() {
    const response = await fetch(businessURL);
    if(response.ok) {
        const data = await response.json(); 
        displayBusinesses(data.businesses);
    } else {
        console.error("There was an error loading the data");
    }
}

getBusinessData(); 

