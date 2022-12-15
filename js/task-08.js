const submitButton = document.querySelector("button");
const form = document.querySelector(".login-form");
const emailPlaceholder = document.getElementsByName("email")[0];
const passwordPlaceholder = document.getElementsByName("password")[0];

function onSubmitDataCollect(event) {
  event.preventDefault();
  const formElement = event.currentTarget.elements;
  const email = formElement.email.value;
  const password = formElement.password.value;

  if (email === "") {
    emailPlaceholder.placeholder = "Field can't be empty";
    formElement.email.style.border = "3px solid #f44336";
  }
  if (password === "") {
    passwordPlaceholder.placeholder = "Field can't be empty";
    formElement.password.style.border = "3px solid #f44336";
  }

  if (email && password) {
    const formData = {
      email,
      password,
    };

    console.log(formData);

    //____________ Через new FormData ______________//
    // const formaData = new FormData(event.currentTarget);
    // console.log(formaData);

    event.currentTarget.reset();

    emailPlaceholder.placeholder = "";
    formElement.email.style.border = "1px solid black";

    passwordPlaceholder.placeholder = "";
    formElement.password.style.border = "1px solid black";
  }
}

form.addEventListener("submit", onSubmitDataCollect);
