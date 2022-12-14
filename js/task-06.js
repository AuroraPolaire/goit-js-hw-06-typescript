const inputField = document.querySelector("#validation-input");
const symbolCount = inputField.getAttribute("data-length");

const onBlurInputCheck = (event) => {
  const inputData = event.currentTarget.value;
  if (inputData.length < symbolCount) {
    inputField.classList.add("invalid");
  } else {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
  }
};

inputField.addEventListener("blur", onBlurInputCheck);
