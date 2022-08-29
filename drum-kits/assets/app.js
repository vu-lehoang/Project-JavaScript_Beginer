const kits = ["crash", "kick", "snare", "tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.classList.add("btn");
  btnEl.style.backgroundImage = "url(./assets/images/" + kit + ".png)";
  btnEl.innerText = kit;
  containerEl.appendChild(btnEl);
  const audioEl = document.createElement("audio");
  audioEl.src = "./assets/sound/" + kit + ".mp3";
  containerEl.appendChild(audioEl);
  btnEl.addEventListener("click", () => {
    audioEl.play();
  });
});

window.addEventListener("keydown", (e) => {
  if (e.key === kits.slice(0, 1)) {
    audioEl.play();
    btnEl.style.transform = "scale(.9)";
    setTimeout(() => {
      btnEl.style.transform = "scale(1)";
    }, 100);
  }
});
