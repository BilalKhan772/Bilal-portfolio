document.addEventListener("DOMContentLoaded", function () {
    /* THEME TOGGLE */
    var root = document.documentElement;
    var toggle = document.querySelector(".theme-toggle");
    var storedTheme = localStorage.getItem("theme");

    if (storedTheme === "light") {
        root.classList.add("theme-light");
    }

    if (toggle) {
        toggle.addEventListener("click", function () {
            var isLight = root.classList.toggle("theme-light");
            localStorage.setItem("theme", isLight ? "light" : "dark");
        });
    }

    /* SCROLL REVEAL */
    var fadeEls = document.querySelectorAll(".animated-fade");

    if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        entry.target.classList.remove("visible");
                    }
                });
            },
            {
                threshold: 0.18
            }
        );

        fadeEls.forEach(function (el) {
            observer.observe(el);
        });
    } else {
        fadeEls.forEach(function (el) {
            el.classList.add("visible");
        });
    }
});
