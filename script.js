const menuBtn = document.getElementById("menuBtn");
const topbar = document.querySelector(".topbar");

menuBtn.addEventListener("click", () => {
  topbar.classList.toggle("open");
});

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => topbar.classList.remove("open"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".story-card, .character, .phase, .game-box");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.12 });

revealItems.forEach(item => {
  item.style.opacity = "0";
  item.style.transform = "translateY(20px)";
  item.style.transition = "opacity .6s ease, transform .6s ease";
  observer.observe(item);
});
