const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoEl = document.querySelector(".trailer-container video");
console.log(trailerContainerEl);
btnEl.addEventListener("click", () => {
  trailerContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", function () {
  trailerContainerEl.classList.add("active");
});

closeIconEl.addEventListener("click", () => {
  trailerContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
