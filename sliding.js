const slider = document.querySelector('.slider');
let currentIndex = 0;
const interval = 3000; // Adjust slide interval in milliseconds

function nextSlide() {
  currentIndex = (currentIndex + 1) % slider.children.length;
  const translateX = -currentIndex * 100;
  slider.style.transform = `translateX(${translateX}%)`;
}

setInterval(nextSlide, interval);


