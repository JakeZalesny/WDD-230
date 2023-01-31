const chapterInput = document.querySelector("#favchap"); 
const addButton = document.querySelector("main button");
const chapterList = document.querySelector("#list");


//Event listener
// the parantheses arrow is an anonymous function, only for use in the parantheses. 
addButton.addEventListener("click", () => {
    if(chapterInput.value == "") {
        return; 
    }
    let newListItem = document.createElement("li");

    let deleteButton = document.createElement("button");

    newListItem.textContent = chapterInput.value; 

    deleteButton.textContent = "❌";

    newListItem.appendChild(deleteButton);

    deleteButton.addEventListener('click', () => {
        newListItem.remove();
    });

    chapterInput.focus(); 

    chapterInput.value = "";

});