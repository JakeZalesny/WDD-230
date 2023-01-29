function toggleMenu() {
    document.querySelector("#navbar").classList.toggle('menu-active')
    document.querySelector("#menu-close").classList.toggle('menu-active')
    document.querySelector("#menu-open").classList.toggle('menu-active')
}

document.querySelector("#hamburger-menu").onclick = toggleMenu; 

const fullDate = new Intl.DateTimeFormat("en-US", {dateStyle: "full"}).format(new Date(document.lastModified));

document.querySelector("#last-modified").textContent = "Last Modified: " + fullDate; 