const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const onInputChangeFontSize = (event) => {
  const fontSize = event.currentTarget.value;
  console.log(fontSize);
  text.style.fontSize = `${fontSize}px`;
};

input.addEventListener("input", onInputChangeFontSize);
