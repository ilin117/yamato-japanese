"use strict";

const observer = new IntersectionObserver(
    function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
            }
        });
    },
    {
        rootMargin: "0px",
        threshold: [0, 0.1, 1],
    }
);

const tags = document.querySelectorAll("div");

tags.forEach((tag) => {
    observer.observe(tag);
});
