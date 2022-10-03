const carousel = document.querySelector(".carousel-stranka");
const carouselPozadi = document.querySelector(".carousel-pozadi");
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

carouselPozadi.addEventListener("click", closeCarousel);

hamburgerMenuButton.addEventListener("click", openHamburgerMenu);
hamburgerMenu.addEventListener("click", closeHamburgerMenu);