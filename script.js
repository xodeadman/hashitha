const btn = document.querySelector(".btn");
const overlay = document.getElementById("overlay");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});
// flip cards on tap
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });
});
