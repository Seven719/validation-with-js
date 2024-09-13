const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const submitBtn = document.getElementById("btn-submit");

const elements = [email, country, zip, password, passwordConfirmation];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  elements.forEach((element) => {
    if (element.validity.valueMissing) {
      console.log("Required field cannot be empty");
    }
  });
});
