const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
let counter = document.getElementById("value");
counter.textContent = 0;
// console.log(counterValue);

const onDecrementButtonClick = (event) => {
  counter.textContent = parseInt(counter.textContent) - 1;
};

const onIncrementButtonClick = (event) => {
  counter.textContent = parseInt(counter.textContent) + 1;
};

decrementButton.addEventListener("click", onDecrementButtonClick);

incrementButton.addEventListener("click", onIncrementButtonClick);
