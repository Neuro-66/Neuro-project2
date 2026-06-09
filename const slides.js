const sliderWrapper = document.querySelector('.slide-wrapper');
const prevButton = document.querySelector('.slider-control.prev');
const nextButton = document.querySelector('.slider-control.next');
let slideIndex = 0;

const slides = [
  { image: 'img/img/cherniedveri.jpg', text: 'Оборудование 1', link: 'page1.html' },
  { image: 'img/oboryd2.jpg', text: 'Оборудование 2', link: 'page2.html' },
  { image: 'img/oboryd3.jpg', text: 'Оборудование 3', link: 'page3.html' }
];

function createSlide(slideData) {
  const slide = document.createElement('div');
  slide.classList.add('slide');
  slide.style.backgroundImage = `url(${slideData.image})`;
  slide.setAttribute('data-text', slideData.text);
  const button = document.createElement('button');
  button.classList.add('book-btn');
  button.textContent = 'Забронировать';
  button.addEventListener('click', () => {
    window.location.href = slideData.link;
  });
  slide.appendChild(button);

  return slide;
}

slides.forEach(slideData => {
  sliderWrapper.appendChild(createSlide(slideData));
});

function updateSlider() {
  sliderWrapper.style.transform = `translateX(-${slideIndex * (100 / 3)}%)`;
}

nextButton.addEventListener('click', () => {
  slideIndex = (slideIndex + 1) % slides.length;
  updateSlider();
});

prevButton.addEventListener('click', () => {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

