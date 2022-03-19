const navToggle = document.querySelector(".toggle");
const navMenu = document.querySelector("nav");

navToggle.addEventListener("click", showMenu)

function showMenu() {
    navMenu.classList.toggle("active");
}