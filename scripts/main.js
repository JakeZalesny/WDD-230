//sets current year in footer. 
const today = new Date(); 
document.querySelector('#currentyear').textContent = today.getFullYear(); 

//sets last modified date.
//last modified is a property of the document, its associated with the document 
document.querySelector('#lastmodified').textContent = document.lastModified; 

function playRighteous() {
    var audio = document.querySelector('#righteous');
    audio.play(); 
}

function stopRighteous() {
    var audio = document.querySelector('#righteous');
    audio.pause(); 
}
function replaceImageWithGif() {
    document.getElementById('image').src = './imgs/pepe_lore.gif';
}

function undoReplacement() {
    document.getElementById('image').src = './imgs/photo_for_class_resized.jpg';
}
