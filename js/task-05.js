const input = document.getElementById("name-input");
let namePlace = document.getElementById("name-output");

const onInputGetName = (event) => {
  return event.currentTarget.value === ""
    ? (namePlace.textContent = "Anonymous")
    : (namePlace.textContent = event.currentTarget.value);
};

input.addEventListener("input", onInputGetName);
