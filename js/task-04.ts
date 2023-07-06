const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
) as HTMLButtonElement;
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
) as HTMLButtonElement;

let counter = document.getElementById("value") as HTMLSpanElement;
counter.textContent = "0";

type ButtonFunction = (event: MouseEvent) => void;

const onDecrementButtonClick: ButtonFunction = (event) => {
  if (counter.textContent !== null)
    counter.textContent = (parseInt(counter.textContent) - 1).toString();
};

const onIncrementButtonClick: ButtonFunction = (event) => {
  if (counter.textContent !== null)
    counter.textContent = (parseInt(counter.textContent) + 1).toString();
};

decrementButton.addEventListener("click", onDecrementButtonClick);

incrementButton.addEventListener("click", onIncrementButtonClick);
