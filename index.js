const email = document.getElementById("email");
const countrySelector = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const form = document.querySelector("form");

const elements = [email, countrySelector, zip, password, passwordConfirmation];
const countries = {
  "United States": [
    new RegExp("^\\d{5}(?:[-\\s]\\d{4})?$"),
    "U.S. ZIP codes must be 5 digits or 5+4 digits: e.g. 12345 or 12345-6789",
  ],
  Switzerland: [
    new RegExp("^(CH-)?\\d{4}$"),
    "Switzerland ZIPs must have exactly 4 digits: e.g. CH-1950 or 1950",
  ],
  France: [
    new RegExp("^(F-)?\\d{5}$"),
    "France ZIPs must have exactly 5 digits: e.g. F-75012 or 75012",
  ],
  Germany: [
    new RegExp("^(D-)?\\d{5}$"),
    "Germany ZIPs must have exactly 5 digits: e.g. D-12345 or 12345",
  ],
  "The Netherlands": [
    new RegExp("^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$"),
    "Netherland ZIPs must have exactly 4 digits, followed by 2 letters except SA, SD and SS",
  ],
};

for (const country in countries) {
  let option = document.createElement("option");
  option.textContent = country;
  countrySelector.appendChild(option);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateForm();
  form.reportValidity();
});

const validateForm = () => {
  missingValues();
  checkZip(countrySelector.value);
  passwordMatch();
};

const missingValues = () => {
  elements.forEach((element) => {
    element.setCustomValidity(
      element.validity.valueMissing ? "Required field cannot be empty" : ""
    );
  });
};

const checkZip = (country) => {
  const { regex, errorMsg } = countries[country];
  zip.setCustomValidity(regex.test(zip.value) ? "" : errorMsg);
};

const passwordMatch = () => {
  passwordConfirmation.setCustomValidity(
    password.value !== passwordConfirmation.value
      ? "Passwords are not matching"
      : ""
  );
};

const emailValidation = () => {
  email.setCustomValidity(
    email.validity.typeMismatch ? "Please input a valid email address" : ""
  );
};

const attachEventListeners = () => {
  zip.addEventListener("input", () => checkZip(countrySelector.value));
  countrySelector.addEventListener("change", () =>
    checkZip(countrySelector.value)
  );
  password.addEventListener("input", () => passwordMatch);
  passwordConfirmation.addEventListener("input", () => passwordMatch);
  email.addEventListener("input", () => emailValidation);
};

attachEventListeners();
