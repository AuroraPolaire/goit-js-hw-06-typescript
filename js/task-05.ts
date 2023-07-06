const input = document.getElementById("name-input") as HTMLInputElement;
let namePlace = document.getElementById("name-output") as HTMLSpanElement;

const onInputGetName = (event: Event) => {
  const target = event.currentTarget as HTMLInputElement;
  namePlace.textContent = target.value === "" ? "Anonymous" : target.value;
};

input.addEventListener("input", onInputGetName);
