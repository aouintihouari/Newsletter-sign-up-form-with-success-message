const form = document.getElementById("form");
const emailInput = form.querySelector("#email");
const errorMessage = form.querySelector(".error-message");
const successComponent = document.querySelector(".success-component");
const successMessageBtn = document.querySelector(".dismiss");
const strong = document.querySelector("strong");


function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function toggleId(element, idName) {
  if (element.id === idName) {
    element.removeAttribute("id");
  } else {
    element.id = idName;
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const emailValue = emailInput.value.trim();

  if (!emailValue || !isValidEmail(emailValue)) {
    errorMessage.textContent = "Valid Email Required";

    emailInput.style.cssText = `
      color: rgb(255, 98, 87);
      background-color: rgba(255, 98, 87, .3);
      border: 1px solid rgb(255, 98, 87);
    `;
  } else {
    errorMessage.textContent = "";
    emailInput.style.cssText = "";
    toggleId(form, "hide");
    toggleId(successComponent, "hide");
    strong.textContent = emailInput.value;
  }
});

successMessageBtn.addEventListener("click", () => {
  toggleId(form, "hide");
  toggleId(successComponent, "hide");
});
