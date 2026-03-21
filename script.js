// Блок 2
const musicBtn = document.getElementById("musicBtn");
const audio = document.getElementById("audio");

if (musicBtn && audio) {
  musicBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });
}

// Анимация появления блоков при скролле

const blocks = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, {
  threshold: 0.2
});

blocks.forEach(block => {
  observer.observe(block);
});