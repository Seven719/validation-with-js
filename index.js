const email = document.getElementById("email");
const countrySelector = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const submitBtn = document.getElementById("btn-submit");

const elements = [email, country, zip, password, passwordConfirmation];
const countries = [
  "United States",
  "Switzerland",
  "France",
  "Germany",
  "The Netherlands",
];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  elements.forEach((element) => {
    if (element.validity.valueMissing) {
      console.log("Required field cannot be empty");
    }
  });
});

countries.forEach((country) => {
  let temp = document.createElement("option");
  temp.textContent = country;
  countrySelector.appendChild(temp);
});
