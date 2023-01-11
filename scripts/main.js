const hamburger = document.querySelector(".hamburger");
const mainNav = document.querySelector(".nav-menu");
const subSzkoleniaSwitch = document.querySelector(".sub-szkolenia-switch");
const subZabiegiSwitch = document.querySelector(".sub-zabiegi-switch");
const subMenuSzkolenia = document.querySelector(".sub-menu-szkolenia");
const subMenuZabiegi = document.querySelector(".sub-menu-zabiegi");
const arrowSzkolenia = document.querySelector(".arrow-szkolenia");
const arrowZabiegi = document.querySelector(".arrow-zabiegi");
const headerTop = document.querySelector(".header-top");
const logoHamburgerContainer = document.querySelector(
	".logo-hamburger-container"
);

/* hamburger menu/submenu open/close */
hamburger.addEventListener("click", toggleNav);

subSzkoleniaSwitch.addEventListener("click", toggleSubSzkolenia);
subZabiegiSwitch.addEventListener("click", toggleSubZabiegi);

function toggleNav() {
	hamburger.classList.toggle("active");
	mainNav.classList.toggle("active");
	headerTop.classList.toggle("active");
	logoHamburgerContainer.classList.toggle("active");
	subMenuSzkolenia.classList.remove("active");
	arrowSzkolenia.classList.remove("active");
	subMenuZabiegi.classList.remove("active");
	arrowZabiegi.classList.remove("active");
}

function toggleSubSzkolenia() {
	subMenuSzkolenia.classList.toggle("active");
	arrowSzkolenia.classList.toggle("active");
	subMenuZabiegi.classList.remove("active");
	arrowZabiegi.classList.remove("active");
}
function toggleSubZabiegi() {
	subMenuZabiegi.classList.toggle("active");
	arrowZabiegi.classList.toggle("active");
	subMenuSzkolenia.classList.remove("active");
	arrowSzkolenia.classList.remove("active");
}
