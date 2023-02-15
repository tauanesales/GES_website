window.addEventListener("DOMContentLoaded", (event) => {
    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector("#sideNav");
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#sideNav",
            offset: 74,
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });
});

window.onscroll = function () {
    // Set the height to check for
    const phoneImg = document.getElementById("phoneImg");
    const side_nav = document.getElementById("sideNav");

    if (window.pageYOffset >= phoneImg.height * 0.5 + phoneImg.offsetTop - side_nav.offsetHeight) {
        // If more show the element
        document.getElementById("ges_btn").style.opacity = "1";
        document.getElementById("ges_btn").style.pointerEvents = "all";
    } else {
        // Else hide it
        document.getElementById("ges_btn").style.opacity = "0";
        document.getElementById("ges_btn").style.pointerEvents = "none";
    }
};
