const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");
let slideIndex = 0;
let visibleSlides = 10;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (slideImages.length > 0) {
    showSlides(slideIndex);
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSlides(index) {
  const start = index * visibleSlides;
  const end = start + visibleSlides;

  slideImages.forEach((img, i) => {
    if (i >= start && i < end) {
      img.classList.add("show");
    } else {
      img.classList.remove("show");
    }
  });

  // Center the slides
  centerSlides();
}

function centerSlides() {
  const sliderWidth = document.querySelector(".slider").offsetWidth;
  const slidesWidth = slides.scrollWidth;
  const maxScrollLeft = slidesWidth - sliderWidth;
  const centerOffset = maxScrollLeft / 2;

  slides.style.transform = `translateX(-${centerOffset}px)`;
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = Math.ceil(slideImages.length / visibleSlides) - 1;
  }
  showSlides(slideIndex);
  intervalId = setInterval(nextSlide, 5000);
}

function nextSlide() {
  clearInterval(intervalId);
  slideIndex++;
  if (slideIndex >= Math.ceil(slideImages.length / visibleSlides)) {
    slideIndex = 0;
  }
  showSlides(slideIndex);
  intervalId = setInterval(nextSlide, 5000);
}