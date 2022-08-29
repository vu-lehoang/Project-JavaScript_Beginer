const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
  console.log("moved");
  const xPos = e.offsetX;
  const yPos = e.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 10;
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
