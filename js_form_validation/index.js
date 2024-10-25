const email = document.getElementById("mail");
const country = document.getElementById("country");
const zipcode = document.getElementById("zipcode");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("pass-confirm");
const submit = document.querySelector("button");

const countryZipCodes = {
  india: [/^\d{6}$/, "The zipcode for India must have exactly 6 digits"],
  nepal: [/^\d{5}$/, "the zipcode for Nepal must have exactly 5 digits"],
  australia: [
    /^\d{4}$/,
    "The zipcode for Australia must have exactly 4 digits",
  ],
  "new zealand": [
    /^\d{4}$/,
    "The zipcode for New Zealand must have exactly 4 digits",
  ],
};

function showError(event) {
  const element = event.target;

  if (element.validity.valueMissing) {
    element.setCustomValidity("This field cannot be empty");
    element.reportValidity();
  } else if (element.validity.typeMismatch) {
    element.setCustomValidity("Please input the email in the correct format");
    element.reportValidity();
  } else if (element.validity.patternMismatch) {
    if (element.id === "country") {
      element.setCustomValidity(
        "The country name should only contain alphabet chracters",
      );
      element.reportValidity();
    } else if (element.id === "password") {
      element.setCustomValidity(
        "The password must start with 6 characters, the 2 numbers and end with @",
      );
      element.reportValidity();
    }
  } else {
    element.setCustomValidity("");
    return false;
  }
}

[email, zipcode, password, passwordConfirm].forEach((item) =>
  item.addEventListener("input", showError),
);

zipcode.addEventListener("input", (e) => {
  const element = e.target;
  const zipcodeRegex = new RegExp(
    countryZipCodes[country.value.toLowerCase()][0],
  );
  const errorMsg = countryZipCodes[country.value.toLowerCase()][1];

  if (element.value === "") return;
  else if (!zipcodeRegex.test(element.value)) {
    element.setCustomValidity(errorMsg);
    element.reportValidity();
  } else element.setCustomValidity("");
});

passwordConfirm.addEventListener("input", () => {
  if (password.value === "") {
    passwordConfirm.setCustomValidity("please fill the password field first");
    passwordConfirm.reportValidity();
  } else if (!password.validity.valid) {
    passwordConfirm.setCustomValidity(
      "The password field does not have correct input please fix it",
    );
    passwordConfirm.reportValidity();
  } else if (!(password.value === passwordConfirm.value)) {
    passwordConfirm.setCustomValidity("This value does not match password");
    passwordConfirm.reportValidity();
  } else passwordConfirm.setCustomValidity("");
});

submit.addEventListener("click", (e) => {
  const eleArray = [email, zipcode, password, passwordConfirm];
  for(let i = 0; i <=3; i++) {
    if (!eleArray[i].validity.valid) {
      e.preventDefault();
      eleArray[i].reportValidity();
      return;
    }
  }
});
