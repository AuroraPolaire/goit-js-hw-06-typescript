function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const input = document.querySelector("input");
const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const boxesPlace = document.querySelector("#boxes");

const inputValue = (number) => {
  return input.value;
};

const getInputValue = (event) => {
  const amount = inputValue();

  let box = [];
  let boxString = "";
  let size = 30;
  for (let i = 1; i <= amount; i += 1) {
    if (i > 1) size += 10;
    box.push(
      `<div style="display: absolute; background-color:${getRandomHexColor()}; height:${size}px; width:${size}px">${i}</div>`
    );
    boxString = box.join("");
  }

  return createBoxes(boxString);
};

createButton.addEventListener("click", getInputValue);

function createBoxes(boxString) {
  boxesPlace.innerHTML = "";
  boxesPlace.insertAdjacentHTML("afterbegin", boxString);
}

function onClickResetValue(event) {
  input.value = 0;
  boxesPlace.innerHTML = "";
}

destroyButton.addEventListener("click", onClickResetValue);

// Перевірка значення input = 0

// if (!amount) {
//   return;
// }
