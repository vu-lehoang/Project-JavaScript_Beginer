const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

console.log(navbarEl.offsetHeight);
console.log(bottomContainerEl.offsetHeight);

window.addEventListener("scroll", () => {
  if (window.scrollY > bottomContainerEl.offsetTop - navbarEl.offsetHeight) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});
