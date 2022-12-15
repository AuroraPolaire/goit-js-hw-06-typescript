function getRandomHexColor() {
  const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return color;
}

const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const colorNamePlace = document.querySelector(".color");

function onButtonClickChangeBackground(event) {
  body.style.backgroundColor = getRandomHexColor();
  colorNamePlace.textContent = getRandomHexColor();
}

button.addEventListener("click", onButtonClickChangeBackground);
