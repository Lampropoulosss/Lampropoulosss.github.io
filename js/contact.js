const emailValidatorRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const submitButton = document.querySelector("#submit-button");
const form = document.querySelector("form");
const section = document.querySelector("section");

const isValidated = {
  name: false,
  email: false,
  message: false,
};

const validationForButton = () => {
  if (Object.values(isValidated).every((value) => value)) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
};

const onValueChange = (e) => {
  if (e.target.value.length === 0 || e.target.value.length > 100) {
    isValidated[e.target.id] = false;
    e.target.classList.add("error");
    return validationForButton();
  }

  isValidated[e.target.id] = true;
  e.target.classList.remove("error");
  validationForButton();
};

const onEmailChange = (e) => {
  if (e.target.value.length > 0 && !emailValidatorRegex.test(e.target.value)) {
    isValidated[e.target.id] = false;
    e.target.classList.add("error");
    return validationForButton();
  }

  if (e.target.value.length === 0) {
    isValidated[e.target.id] = false;
    e.target.classList.remove("error");
    return validationForButton();
  }

  // If the email is valid
  isValidated[e.target.id] = true;
  e.target.classList.remove("error");
  validationForButton();
};

document.getElementById("name").addEventListener("input", onValueChange);
document.getElementById("email").addEventListener("input", onEmailChange);
document.getElementById("message").addEventListener("input", onValueChange);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  form.classList.add("hidden");

  //   Για να δειτε πως ξερουμε και dom manipulation
  const div = document.createElement("div");
  div.classList.add("success-message");
  const paragraph = document.createElement("p");
  paragraph.textContent = "Your message has been successfully sent!";

  div.appendChild(paragraph);
  section.appendChild(div);
});
