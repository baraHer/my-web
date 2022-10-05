const carousel = document.querySelector(".carousel-stranka");
const carouselClose = document.querySelector(".zavrit");
const carouselPozadi = document.querySelector(".carousel-pozadi");

const carouselNextButton = document.querySelector(".dalsi")
const carouselPrevButton = document.querySelector(".predchozi")

const foto = document.querySelectorAll(".foto");
const carouselFoto = document.querySelectorAll(".carousel-img")
const pocetFotek = foto.length;
let otevreneFoto;

const hamburgerMenu = document.querySelector(".hamburger-menu");
const hamburgerMenuButton = document.querySelector(".menu-img");

const closeCarousel = () => {
  carousel.style.display = "none";
}

const openCarousel = (fotoKliknuto) => {
  carousel.style.display = "grid";
  for(let i = 0; i < pocetFotek; i++) {
    carouselFoto[i].style.display = "none";
  }
  carouselFoto[fotoKliknuto].style.display = "block";
  otevreneFoto = fotoKliknuto
}

const carouselNext = () => {
  let noveFoto;
  if (otevreneFoto + 1 < pocetFotek) {
    noveFoto = otevreneFoto + 1;
    otevreneFoto ++;
  }
  else {
    noveFoto = 0;
    otevreneFoto = 0;
  }
  openCarousel(noveFoto);
}

const carouselPrev = () => {
  let noveFoto;
  if (otevreneFoto > 0) {
    noveFoto = otevreneFoto - 1;
    otevreneFoto = otevreneFoto - 1;
  }
  else {
    noveFoto = pocetFotek - 1;
    otevreneFoto = pocetFotek - 1;
  }
  openCarousel(noveFoto);
}

const closeHamburgerMenu = () => {
  hamburgerMenu.style.display = "none";
}

const openHamburgerMenu = () => {
  hamburgerMenu.style.display = "block";
}

hamburgerMenuButton.addEventListener("click", openHamburgerMenu);
hamburgerMenu.addEventListener("click", closeHamburgerMenu);

carouselNextButton.addEventListener("click", carouselNext);
carouselPrevButton.addEventListener("click", carouselPrev);
carouselPozadi.addEventListener("click", closeCarousel);
carouselClose.addEventListener("click", closeCarousel);