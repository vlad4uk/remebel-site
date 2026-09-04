const slides = document.querySelectorAll('.slide');
let current = 1; // центральный слайд

function updateSlides() {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === current);
  });
}

document.getElementById('next').onclick = () => {
  current = (current + 1) % slides.length;
  updateSlides();
};

document.getElementById('prev').onclick = () => {
  current = (current - 1 + slides.length) % slides.length;
  updateSlides();
};

updateSlides();
