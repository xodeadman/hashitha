const btn = document.querySelector(".btn");
const overlay = document.getElementById("overlay");
const closeBtn = document.querySelector(".close");

btn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

