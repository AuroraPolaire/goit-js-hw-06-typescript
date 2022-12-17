const inputField = document.querySelector("#validation-input");
const symbolCount = parseInt(inputField.getAttribute("data-length"));

const onBlurInputCheck = (event) => {
  const inputData = event.currentTarget.value;
  if (inputData.length > symbolCount || inputData.length === symbolCount) {
    inputField.classList.replace("invalid", "valid");
  } else {
    inputField.classList.add("invalid");
  }
};

inputField.addEventListener("blur", onBlurInputCheck);
