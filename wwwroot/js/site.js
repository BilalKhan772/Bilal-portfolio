document.addEventListener("DOMContentLoaded", function () {
    // Scroll reveal for elements with .animated-fade
    var fadeEls = document.querySelectorAll(".animated-fade");

    if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                    } else {
                        // viewport se bahar jayen to visible hata do
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
        // Fallback: agar browser support nahi karta to sab visible
        fadeEls.forEach(function (el) {
            el.classList.add("visible");
        });
    }
});
