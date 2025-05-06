const correctAnswer = "yağmur";

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  if (userAnswer === correctAnswer) {
    document.getElementById("gate").style.display = "none";
    document.getElementById("content").style.display = "block";
    typeWriter();

    // buton animasyonla gelsin
    setTimeout(() => {
      document.getElementById("revealButton").classList.add("visible");
    }, 2500);

    audio.play();
  } else {
    document.getElementById("error").innerText = "Cevap uzağında değil, ön kameranı açıp öğrenebilirsin.";
  }
}

const message = "Seni çok seviyorum 💗";
let index = 0;

function typeWriter() {
  if (index < message.length) {
    document.getElementById("typeEffect").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

function showMessage() {
  document.getElementById("secretMessage").style.display = "block";
}

// Kalpler
setInterval(() => {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.top = '100vh';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 3000);
}, 500);

// Müzik Çalar
const audio = document.getElementById("audioPlayer");
const seekBar = document.getElementById("seekBar");
const nowPlaying = document.getElementById("nowPlaying");

const playlist = [
  { name: "Şarkı 1", file: "music1.mp3" },
];


function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}


audio.addEventListener("timeupdate", () => {
  const progress = (audio.currentTime / audio.duration) * 100;
  seekBar.value = progress;
});

audio.addEventListener("ended", nextSong);

// İlk şarkıyı yükle
loadSong(currentSong);
