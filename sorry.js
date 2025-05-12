const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const container = document.getElementById("container");

let escapeCount = 0;
const maxEscapes = 15;

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton); // mobil destek

yesBtn.addEventListener("click", () => {
  window.location.href = "index.html"; // ana siteye yönlendirme
});

function moveButton() {
  escapeCount++;

  if (escapeCount >= maxEscapes) {
    noBtn.style.display = 'none';

    const forgivenMessage = document.createElement('p');
    forgivenMessage.innerText = 'Seni çok sevdiğimi söylesem affeder misin ? 💗';
    forgivenMessage.style.fontSize = '1.5rem';
    forgivenMessage.style.color = '#d6336c';
    forgivenMessage.style.marginTop = '20px';
    container.appendChild(forgivenMessage);

    const img = document.createElement('img');
    img.src = 'images/affet.png';
    img.alt = 'Affettim seni';
    img.style.width = '200px';
    img.style.marginTop = '1px';
    img.style.borderRadius = '12px';
    container.appendChild(img);

    return;
  }

  const containerWidth = container.clientWidth - noBtn.offsetWidth;
  const containerHeight = container.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * containerWidth;
  const y = Math.random() * containerHeight;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

