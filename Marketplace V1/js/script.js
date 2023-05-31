const menuBar = document.getElementById("menu-bar")
const navLinks = document.getElementById("nav-links")
const hideMenu = document.getElementById("hide-menu")

menuBar.addEventListener("click", () => {
    navLinks.classList.toggle("show-nav")
    console.log("click")
})

hideMenu.addEventListener("click", () => {
    navLinks.classList.toggle("show-nav")
    console.log("click")
})