
//toggle
const burger = document.querySelector(".burger i");
console.log(burger);
const nav = document.querySelector(".nav");
console.log(nav);

function showHamburger() {
	burger.classList.toggle("fa-times");
	nav.classList.toggle("nav-active");
}
