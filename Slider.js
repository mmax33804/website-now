const sliderContainer = document.querySelector('.slider-items')
const leftButton = document.querySelector('.left')
const rightButton = document.querySelector('.right')

const singleSlide = document.querySelector('.item')
const scrollAmount = singleSlide.clientWidth + 16;

// 3. Добавляем "Слушатель событий" (Event Listener) для кнопки "Вперед"
rightButton.addEventListener('click', () => {
    // При нажатии, прокручиваем контейнер:
    sliderContainer.scrollBy({
        left: scrollAmount, // Сдвигаем вправо на ширину одного слайда
        behavior: 'smooth'  // Делаем прокрутку плавной
    });
});

leftButton.addEventListener('click', () =>{
    sliderContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    })
})
