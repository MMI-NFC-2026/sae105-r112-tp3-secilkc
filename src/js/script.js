// *** CAROUSEL ***
// TODO

const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");

if (carousel) {
  const premierItem = document.querySelector(".carousel__item");

  prevButton.addEventListener("click", () => {
    carousel.scrollBy({ left: -premierItem.clientWidth, behavior: "smooth" });
  });

  nextButton.addEventListener("click", () => {
    carousel.scrollBy({ left: premierItem.clientWidth, behavior: "smooth" });
  });
}