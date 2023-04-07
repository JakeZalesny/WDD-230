const totalbar = document.querySelector("#total-bar");
const navbar = document.querySelector("#navbar");
const menu_open = document.querySelector("#menu-open");
const header = document.querySelector("header"); 

function reorderHeader() {
    if(navbar.classList.contains("menu-active")) {
        header.remove(totalbar);
        header.append(totalbar);
    }
}

reorderHeader(); 