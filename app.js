"use strict";

const slides = document.querySelectorAll(".slide");
const btnLeft = document.getElementById("arrowLeft");
const btnRight = document.getElementById("arrowRight");
let curSlide = 0;
const maxSlide = slides.length;
const slider = document.querySelector(".sliderBox");

// Create function to move slides

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${(i - slide) * 100}%)`)
  );
};

goToSlide(0);

const nextSlide = function () {
  // Checking if the current slide is last one
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  //Checking if the current slide is first one
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

// Add functionality to buttons

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);
