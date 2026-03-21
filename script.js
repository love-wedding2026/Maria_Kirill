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

// Блок 8 — отправка без перехода

const form = document.getElementById("form8");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch("https://formsubmit.co/ajax/merryswit100420@mail.ru", {
      method: "POST",
      body: data
    })
    .then(response => response.json())
    .then(data => {
      form.reset();
    })
    .catch(error => console.log(error));
  });
}
