function showCake() {
  switchSection("startSection", "cakeSection");
}

function showGallery() {
  switchSection("cakeSection", "gallerySection");
}

function showMessage() {
  switchSection("gallerySection", "messageSection");
}

function showFinal() {
  switchSection("messageSection", "finalSection");
}

function switchSection(hideId, showId) {
  document.getElementById(hideId).classList.add("hidden");
  const showSection = document.getElementById(showId);
  showSection.classList.remove("hidden");
  showSection.classList.add("fadeIn");
}

/* Butterflies */
function createButterfly() {
  const butterfly = document.createElement("div");
  butterfly.classList.add("butterfly");
  butterfly.innerHTML = "🦋";
  butterfly.style.left = Math.random() * window.innerWidth + "px";
  butterfly.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.body.appendChild(butterfly);
  setTimeout(() => butterfly.remove(), 8000);
}
setInterval(createButterfly, 800);

/* Floating Teddy */
function createTeddy() {
  const teddy = document.createElement("div");
  teddy.classList.add("teddy");
  teddy.innerHTML = "🧸";
  teddy.style.left = Math.random() * window.innerWidth + "px";
  teddy.style.animationDuration = (8 + Math.random() * 5) + "s";
  document.body.appendChild(teddy);
  setTimeout(() => teddy.remove(), 10000);
}
setInterval(createTeddy, 3000);

/* Floating Hearts */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 1000);