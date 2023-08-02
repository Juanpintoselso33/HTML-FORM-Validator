/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let alert;
let card;
let cvc;
let amount;
let firstName;
let lastName;
let city;
let state;
let postalCode;
let message;
let radioButtons;

function hideAlert() {
  alert.style.display = "none";
}

function showAlert() {
  alert.style.display = "block";
}

function errorField(field) {
  field.classList.add("bg-danger");
}

window.onload = function() {
  alert = document.getElementById("myAlert");
  card = document.getElementById("cardNumber");
  cvc = document.getElementById("cvcNumber");
  amount = document.getElementById("amount");
  firstName = document.getElementById("firstName");
  lastName = document.getElementById("lastName");
  city = document.getElementById("city");
  state = document.getElementById("state");
  postalCode = document.getElementById("postalCode");
  message = document.getElementById("message");
  radioButtons = document.getElementsByName("paymentMethod");
  hideAlert(alert);
};

let submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function() {
  let isValid = true;
  let fields = [
    card,
    cvc,
    amount,
    firstName,
    lastName,
    city,
    state,
    postalCode,
    message
  ];

  fields.forEach(function(field) {
    if (field.value.trim() === "" || field.value.trim() === "Choose...") {
      errorField(field);
      isValid = false;
    } else {
      field.classList.remove("bg-danger");
    }
  });

  let isChecked = false;
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    isValid = false;
    radioButtons.forEach(function(radio) {
      radio.parentElement.parentElement.classList.add("bg-danger");
    });
  } else {
    radioButtons.forEach(function(radio) {
      radio.parentElement.parentElement.classList.remove("bg-danger");
    });
  }
  if (!isValid) {
    showAlert();
  } else {
    hideAlert();
  }
});
