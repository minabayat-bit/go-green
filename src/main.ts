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


function animateSkill(id: string, percent: number) {
  const bar = document.getElementById(`${id}-bar`) as HTMLElement;
  const label = document.getElementById(`${id}-percent`) as HTMLElement;

  let current = 0;
  const interval = setInterval(() => {
    if (current >= percent) {
      clearInterval(interval);
    } else {
      current++;
      label.textContent = `${current}%`;
      bar.style.width = `${current}%`;
    }
  }, 20);
}


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkill('html', 100);
      animateSkill('css', 90);
      animateSkill('js', 60);
      animateSkill('php', 70);
      observer.disconnect();
    }
  });
}, { threshold: 0.5 });

observer.observe(document.getElementById('skills')!);



function animateCount(id: string, target: number, duration: number = 2000): void {
  const el = document.getElementById(id) as HTMLElement;
  let current = 0;
  const increment = Math.ceil(target / (duration / 20));
  const counter = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(counter);
    }
    el.textContent = current.toString();
  }, 20);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCount('number1', 100);
      animateCount('number2', 200);
      animateCount('number3', 300);
      animateCount('number4', 400);
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });

statsObserver.observe(document.getElementById("stats")!);

