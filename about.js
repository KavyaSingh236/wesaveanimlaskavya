const slider = document.querySelector('.slider');
const prevIcon = document.querySelector('.prev-icon');
const nextIcon = document.querySelector('.next-icon');

prevIcon.addEventListener('click', () => {
  slider.style.animationPlayState = 'paused';
  slider.style.animation = 'none';
  slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
  setTimeout(() => {
    slider.style.animation = 'slide 20s infinite';
    slider.style.animationPlayState = 'running';
  }, 100);
});

nextIcon.addEventListener('click', () => {
  slider.style.animationPlayState = 'paused';
  slider.style.animation = 'none';
  slider.appendChild(slider.firstElementChild);
  setTimeout(() => {
    slider.style.animation = 'slide 20s infinite';
    slider.style.animationPlayState = 'running';
  }, 100);
});
