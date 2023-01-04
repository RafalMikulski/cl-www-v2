const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".main-nav-container");

hamburger.addEventListener("click", toggleNav);

function toggleNav() {
	hamburger.classList.toggle("active");
	mainNav.classList.toggle("active");
}
