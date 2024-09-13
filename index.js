const email = document.getElementById("email");
const countrySelector = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const submitBtn = document.getElementById("btn-submit");

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

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  elements.forEach((element) => {
    if (element.validity.valueMissing) {
      console.log("Required field cannot be empty");
    }
  });
});

for (const country in countries) {
  let temp = document.createElement("option");
  temp.textContent = country;
  countrySelector.appendChild(temp);
}

const checkZip = (country) => {
  const constraint = countries[country][0];

  if (constraint.test(zip.value)) {
    zip.setCustomValidity("");
  } else {
    zip.setCustomValidity(countries[country][1]);
  }
};

const selectedCountry = () => {
  for (const country of document.querySelectorAll("option")) {
    if (country.selected == true) {
      return country.textContent;
    }
  }
};

zip.addEventListener("input", () => {
  checkZip(selectedCountry());
});

countrySelector.addEventListener("click", () => {
  checkZip(selectedCountry());
});
