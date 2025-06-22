"use strict";

// navbar
let options_button = document.getElementById("open-options");
let nav_button = document.getElementById("nav-icon");
let options = document.getElementById("options");
let links = document.querySelectorAll("#options > a");
let nav_clicked = false;
let other = document.getElementById("other");
let navToggle = document.querySelector(".nav-toggle");
let bars = document.querySelectorAll(".bar");
let main = document.querySelector(".main-content");

function toggleHamburger() {
    nav_clicked = !nav_clicked;
    bars.forEach(function (bar) {
        bar.classList.toggle("x");
    });

    document.body.classList.toggle("black-background");

    links.forEach(function (link) {
        link.classList.toggle("move", nav_clicked);
    });
    main.classList.toggle("hide", nav_clicked);
    options.classList.toggle("show");
}

navToggle.addEventListener("click", toggleHamburger);
