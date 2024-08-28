const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.right-button');
const prevButton = document.querySelector('.left-button');

let currentSlideIndex = slides.findIndex(slide => slide.classList.contains('current-slide'));

// Функция для отображения слайда по индексу
function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('current-slide');
        } else {
            slide.classList.remove('current-slide');
        }
    });
}

// Обработчик клика на кнопку "Вправо"
nextButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
});

// Обработчик клика на кнопку "Влево"
prevButton.addEventListener('click', () => {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    showSlide(currentSlideIndex);
});
