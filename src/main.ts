import './style.css'

const slidesEl = document.querySelectorAll(".slider")
const intervalEl : number = 5000;
let current: number = 0;
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

function showSlide(index: number): void {
    slidesEl.forEach((slide, i) => {
        slide.classList.remove('opacity-100');
        slide.classList.add('opacity-0');
        if (i === index) {
            slide.classList.remove('opacity-0');
            slide.classList.add('opacity-100');
        }
    })
}

function nextSlide(): void {
    current = (current + 1) % slidesEl.length;
    showSlide(current);
}

function prevSlide(): void {
    current = (current - 1 + slidesEl.length) % slidesEl.length;
    showSlide(current);
}

nextBtn?.addEventListener('click', () => {
    nextSlide();
    resetTimer();
})


prevBtn?.addEventListener('click', () => {
    prevSlide();
    resetTimer();
})

let slideTimer: number = window.setInterval(nextSlide, intervalEl);

function resetTimer(): void {
    clearInterval(slideTimer);
    slideTimer = window.setInterval(nextSlide, intervalEl);
}
showSlide(current);