const carousel = () => {
  // Selectors
  const slides = document.querySelectorAll(".slideshow__slide");
  const carouselPreviousButton = document.querySelector(".slideshow__prev");
  const carouselNextButton = document.querySelector(".slideshow__next");

  // State
  let currentSlideIndex = 0;
  const lastSlideIndex = slides.length - 1;

  // On mount
  showSlide(currentSlideIndex);

  // Handlers
  function goToPreviousSlide() {
    hideSlide(currentSlideIndex);

    if (currentSlideIndex == 0) {
      currentSlideIndex = lastSlideIndex;
    } else {
      currentSlideIndex--;
    }

    showSlide(currentSlideIndex);
  }

  function goToNextSlide() {
    hideSlide(currentSlideIndex);

    if (currentSlideIndex == lastSlideIndex) {
      currentSlideIndex = 0;
    } else {
      currentSlideIndex++;
    }

    showSlide(currentSlideIndex);
  }

  function hideSlide(slideIndex) {
    slides[slideIndex].style.display = "none";
  }

  function showSlide(slideIndex) {
    slides[slideIndex].style.display = "block";
  }

  // Events
  carouselPreviousButton.addEventListener("click", goToPreviousSlide);
  carouselNextButton.addEventListener("click", goToNextSlide);
};

export default carousel;
