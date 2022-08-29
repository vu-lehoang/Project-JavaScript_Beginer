const containerEl = document.querySelector(".container");

const btnEl = document.querySelector(".btn");
const popupEl = document.querySelector(".popup-container");
const closeIconEl = document.querySelector(".close-icon");
btnEl.addEventListener("click", () => {
  containerEl.classList.add("active");
  popupEl.classList.remove("active");
});
closeIconEl.addEventListener("click", (e) => {
  popupEl.classList.add("active");
  containerEl.classList.remove("active");
});
