import { typeError, messages } from "./customErrors.js";



const fields = [...document.querySelectorAll("[required]")];
//console.log(fields)
const submitButton = document.querySelector(".button__send");

fields.forEach((field) => {
    field.addEventListener("blur", () => validateField(field))
    field.addEventListener("invalid", (e) => e.preventDefault());
});

function validateField(field) {
    let message = "";
    field.setCustomValidity("");

    typeError.forEach((error) => {
        if (field.validity[error]) {
            message = messages[field.name][error];
        }
    });

    const errorMessage = field.parentNode.querySelector(".error__message");
    const inputValid = field.checkValidity();

    if (!inputValid) {
        errorMessage.textContent = message;
        submitButton.setAttribute('disabled', '')
    } else {
        errorMessage.textContent = "";
        submitButton.removeAttribute('disabled')
    }

    validateFields()
}

function validateFields() {
    let isValid = true;

    fields.forEach((field) => {
        if (!field.checkValidity()) {
            isValid = false;
        }
    });

    if (isValid) {
        submitButton.removeAttribute('disabled');
    } else {
        submitButton.setAttribute('disabled', '');
    }
}