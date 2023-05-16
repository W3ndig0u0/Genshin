const leftHandle = document.getElementById("prev");
const rightHandle = document.getElementById("next");
const sliderContainer = document.getElementById("sliderContainer");
const slider = sliderContainer.querySelector(".slider");
const slides = slider.querySelectorAll(".box");
const slideWidth = slides[0].offsetWidth;
let currentPosition = 0;

leftHandle.addEventListener("click", moveSlider.bind(null, "left"));
rightHandle.addEventListener("click", moveSlider.bind(null, "right"));


function moveSlider(direction) {
  const sliderWidth = slider.offsetWidth;
  const maxPosition = sliderWidth - slideWidth;
  const numSlides = slides.length;
  const maxVisibleSlides = Math.floor(sliderWidth / slideWidth);
  const numHiddenSlides = numSlides - maxVisibleSlides;
  const numSlidesToSlide = Math.min(maxVisibleSlides, numHiddenSlides)/2; // Number of new slides to show

  let targetPosition;

  if (direction === "left") {
    if (currentPosition <= 0) {
      targetPosition = maxPosition; // Go to the end if at the start
    } else {
      targetPosition = Math.max(currentPosition - (numSlidesToSlide * slideWidth), 0);
    }
  } else if (direction === "right") {
    if (currentPosition >= maxPosition) {
      targetPosition = 0; // Go back to the start if at the end
    } else {
      targetPosition = Math.min(currentPosition + (numSlidesToSlide * slideWidth), maxPosition);
    }
  } else {
    return; // No new elements are visible or invalid direction, exit the function
  }

  currentPosition = targetPosition;

  slider.style.transition = "transform 0.6s ease"; // Adjust the transition duration here
  slider.style.transform = `translateX(-${currentPosition}px)`;
}
