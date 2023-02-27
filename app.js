let BURGER_ICON = document.querySelector("#burger");
let MENU = document.querySelector("nav")
BURGER_ICON.addEventListener("click", toggleClassForBurgerIcon)


function toggleClassForBurgerIcon () {
    BURGER_ICON.classList.toggle("active")
    MENU.classList.toggle("open")
}