"use strict";
let error = document.getElementsByClassName("error-label");

let name_field = document.getElementById("name");
let email_field = document.getElementById("email");
let phone_field = document.getElementById("phone-number");
let submit_btn = document.getElementById("submit-btn");
let btn = document.querySelector("#submit-btn");
let btnText = document.querySelector("#btnText");
let file = document.getElementById("resume");
const phone_regex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
const email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function displayError(event) {
    const field = event.target;
    const error = field.previousElementSibling;

    if (error) {
        error.classList.toggle("show", field.value === "");
    }
}

const fields = [name_field, email_field, phone_field];

fields.forEach((field) => {
    field.addEventListener("blur", displayError);
    field.addEventListener("input", displayError);
});

submit_btn.addEventListener("click", () => {
    if (
        name_field.value === "" ||
        email_field.value === "" ||
        phone_field.value === "" ||
        phone_field.value.match(phone_regex) == null
    ) {
        alert("Please make sure to enter ALL fields correctly");
    } else {
        btnText.innerHTML = "Thanks";
        btn.classList.add("active");
    }
});
