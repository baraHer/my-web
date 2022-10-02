const carousel = document.querySelector(".carousel-stranka");
const carouselPozadi = document.querySelector(".carousel-pozadi");

const closeCarosel = () => {
  carousel.style.display = "none";
}

carouselPozadi.addEventListener("click", closeCarosel);