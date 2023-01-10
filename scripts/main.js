//sets current year in footer. 
const today = new Date(); 
document.querySelector('#currentyear').textContent = today.getFullYear(); 

//sets last modified date.
//last modified is a property of the document, its associated with the document 
document.querySelector('#lastmodified').textContent = document.lastModified; 
