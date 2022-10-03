const carousel = document.querySelector(".carousel-stranka");
const carouselClose = document.querySelector(".zavrit");
const carouselPozadi = document.querySelector(".carousel-pozadi");
const foto = document.querySelectorAll(".foto");

const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuButton = document.querySelector(".menu-img");

const closeCarousel = () => {
  carousel.style.display = "none";
}

const openCarousel = () => {
  carousel.style.display = "grid";
}

const closeHamburgerMenu = () => {
  hamburgerMenu.style.display = "none";
}

const openHamburgerMenu = () => {
  hamburgerMenu.style.display = "block";
}

hamburgerMenuButton.addEventListener("click", openHamburgerMenu);
hamburgerMenu.addEventListener("click", closeHamburgerMenu);

carouselPozadi.addEventListener("click", closeCarousel);
carouselClose.addEventListener("click", closeCarousel);

let pocetFotek = foto.length;
for (let i = 0; i <= pocetFotek; i++) {
  foto[i].addEventListener("click", openCarousel);
}