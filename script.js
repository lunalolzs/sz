/* ✨ estrelas */
for (let i = 0; i < 30; i++) {
  const star = document.createElement("div");
  star.className = "star";

  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = (5 + Math.random() * 5) + "s";

  document.body.appendChild(star);
}

/* 🎧 música */
const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
const volumeControl = document.getElementById("volumeControl");

let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play().catch(() => {
      alert("Clique novamente para ativar o áudio 💖");
    });
    playBtn.textContent = "❚❚";
  } else {
    music.pause();
    playBtn.textContent = "♡";
  }
  isPlaying = !isPlaying;
});

volumeControl.addEventListener("input", () => {
  music.volume = volumeControl.value;
});

/* 🌙 BIO */
const bio = document.getElementById("bioFloat");

bio.classList.add("hide");

window.addEventListener("load", () => {
  setTimeout(() => {
    bio.classList.remove("hide");
  }, 1500);
});

function toggleBio() {
  bio.classList.toggle("hide");
}

const avatar = document.querySelector(".avatar");

if (avatar) {
  avatar.addEventListener("click", () => {
    bio.classList.remove("hide");
  });
}