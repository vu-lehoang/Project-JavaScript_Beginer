const textareaEl = document.querySelector("#textarea");
const totalCounterEl = document.querySelector("#total-counter");
const remainingCounterEl = document.querySelector("#remaining-counter");
remainingCounterEl.innerText = textareaEl.getAttribute("maxLength");
textareaEl.addEventListener("keyup", () => {
  updateCounter();
});

function updateCounter() {
  totalCounterEl.innerText = textareaEl.value.length;
  remainingCounterEl.innerText =
    textareaEl.getAttribute("maxLength") - textareaEl.value.length;
}
