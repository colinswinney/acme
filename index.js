// Nav Toggle
const body = document.body;
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("navbar-menu");

navToggle.addEventListener("click", function () {
    body.classList.toggle("nav-active");
    navToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
});