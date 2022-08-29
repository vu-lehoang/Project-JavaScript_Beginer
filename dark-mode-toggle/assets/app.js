const inputEl = document.querySelector(".input");
const bodyEl = document.querySelector("body");
console.log(inputEl.checked);

inputEl.checked = localStorage.getItem("mode");
updateBody();

function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "black";
  } else {
    bodyEl.style.background = "#fff";
  }
}

inputEl.addEventListener("input", () => {
  updateBody();
  updateLocalStroage();
});

function updateLocalStroage() {
  localStorage.setItem("mode", JSON.stringify(inputEl.checked));
}
