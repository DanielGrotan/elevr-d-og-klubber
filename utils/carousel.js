export default function carousel(imagesJson) {
  // Selectors
  const carouselContainer = document.querySelector(".carousel");

  // State
  let currentSlideIndex = 0;
  const lastSlideIndex = imagesJson.images.length - 1;

  // On mount
  const [carouselPreviousSlideButton, carouselNextSlideButton, slides] =
    renderCarousel(carouselContainer, imagesJson);

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
  carouselPreviousSlideButton.addEventListener("click", goToPreviousSlide);
  carouselNextSlideButton.addEventListener("click", goToNextSlide);
}

function renderCarousel(carouselContainer, imagesJson) {
  const slides = [];

  // On mount
  for (let i = 0; i < imagesJson.images.length; i++) {
    const { filename, description, altText } = imagesJson.images[i];

    const carouselSlideContainer = document.createElement("div");
    carouselSlideContainer.className = "carousel__slide";

    const slideNumbertext = document.createElement("p");
    slideNumbertext.className = "carousel__slide-numbertext";
    slideNumbertext.innerHTML = `${i + 1} / ${imagesJson.images.length}`;

    const slideImageWrapper = document.createElement("div");
    slideImageWrapper.className = "carousel__slide-img-wrapper";

    const slideImage = document.createElement("img");
    slideImage.className = "carousel__slide-img";
    slideImage.src = imagesJson.basePath + filename;
    slideImage.alt = altText;

    slideImageWrapper.appendChild(slideImage);

    const slideText = document.createElement("p");
    slideText.className = "carousel__slide-text";
    slideText.innerHTML = description;

    carouselSlideContainer.appendChild(slideNumbertext);
    carouselSlideContainer.appendChild(slideImageWrapper);
    carouselSlideContainer.appendChild(slideText);

    carouselContainer.appendChild(carouselSlideContainer);

    slides.push(carouselSlideContainer);
  }

  const carouselPreviousSlideButton = document.createElement("a");
  carouselPreviousSlideButton.className = "carousel__prev";
  carouselPreviousSlideButton.innerHTML = "&#10094;";

  const carouselNextSlideButton = document.createElement("a");
  carouselNextSlideButton.className = "carousel__next";
  carouselNextSlideButton.innerHTML = "&#10095;";

  carouselContainer.appendChild(carouselPreviousSlideButton);
  carouselContainer.appendChild(carouselNextSlideButton);

  return [carouselPreviousSlideButton, carouselNextSlideButton, slides];
}
