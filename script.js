const openBtn = document.getElementById("openLetter");
const closeBtn = document.getElementById("closeLetter");
const overlay = document.getElementById("overlay");
const cards = document.getElementById("cards");

openBtn.onclick = () => {
  overlay.classList.remove("hidden");
};

closeBtn.onclick = () => {
  overlay.classList.add("hidden");
  cards.classList.remove("hidden");
};

document.querySelectorAll(".card").forEach(card => {
  card.onclick = () => {
    card.classList.toggle("flipped");
  }
});
