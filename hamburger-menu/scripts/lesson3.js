function toggleMenu() {
    //Toggle allows us to take off or add the class into the html 
    document.querySelector("#navbar").classList.toggle('menu-active')
    document.querySelector("#menu-close").classList.toggle('menu-active')
    document.querySelector("#menu-open").classList.toggle('menu-active')
}

//Don't put the parentheses in the equals sign
// toggleMenu is a function and can be passed as a parameter. 
// If you put parentheses on toggleMenu it passes void into the onclick instead of doing what it should.
document.querySelector("#hamburger-menu").onclick = toggleMenu; 