function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return color;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorNamePlace = document.querySelector(".color");

function onButtonClickChangeBackground(event) {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorNamePlace.textContent = color;
}

button.addEventListener("click", onButtonClickChangeBackground);
