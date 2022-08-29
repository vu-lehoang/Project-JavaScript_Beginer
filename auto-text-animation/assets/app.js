const containerEl = document.querySelector(".container");
console.log(containerEl);

const careers = [
  "Me",
  "Youtuber",
  "Instructor",
  "Uber driver",
  "Freelancer",
  "Web Designer",
];

let careersIndex = 0;
let characterIndex = 0;
updateText();
function updateText() {
  let arr = ["a", "e", "o", "u", "I"];
  containerEl.innerHTML = ` <h1>I am ${
    careers[careersIndex].slice(0, 1) === "A" ||
    careers[careersIndex].slice(0, 1) === "I" ||
    careers[careersIndex].slice(0, 1) === "E" ||
    careers[careersIndex].slice(0, 1) === "O" ||
    careers[careersIndex].slice(0, 1) === "U"
      ? "an"
      : "a"
  } 
    ${careers[careersIndex].slice(0, characterIndex)}
  </h1>`;

  if (characterIndex === careers[careersIndex].length) {
    careersIndex++;
    characterIndex = 0;
  }

  if (careersIndex === careers.length) {
    careersIndex = 0;
  }

  setTimeout(updateText, 400);
  characterIndex++;
}
