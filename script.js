/* estrelas */
for (let i = 0; i < 40; i++) {
  const star = document.createElement("div");
  star.className = "star";

  const size = 3 + Math.random() * 4;
  star.style.width = size + "px";
  star.style.height = size + "px";

  star.style.left = Math.random() * 100 + "vw";
  star.style.animationDuration = (4 + Math.random() * 6) + "s";

  document.body.appendChild(star);
}

/* música */
const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
const volumeControl = document.getElementById("volumeControl");

let isPlaying = false;

playBtn.onclick = () => {
  if (!isPlaying) {
    music.play();
    playBtn.textContent = "❚❚";
  } else {
    music.pause();
    playBtn.textContent = "♡";
  }
  isPlaying = !isPlaying;
};

volumeControl.oninput = () => {
  music.volume = volumeControl.value;
};

/* bio */
const bio = document.getElementById("bioFloat");

window.onload = () => {
  setTimeout(() => bio.classList.remove("hide"), 1200);
};

function toggleBio() {
  bio.classList.toggle("hide");
}

document.querySelector(".avatar").onclick = () => {
  bio.classList.remove("hide");
};
