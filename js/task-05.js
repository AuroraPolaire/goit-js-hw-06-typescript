const input = document.getElementById("name-input");
let namePlace = document.getElementById("name-output");

const onInputGetName = (event) => {
  namePlace.textContent =
    event.currentTarget.value === "" ? "Anonymous" : event.currentTarget.value;
};

input.addEventListener("input", onInputGetName);
