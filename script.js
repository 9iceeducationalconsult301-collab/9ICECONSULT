// ===============================
// 9ICE EDUCATION CONSULTANT
// MAIN JAVASCRIPT
// ===============================


// ===============================
// MOBILE NAVIGATION
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-open");

        // Change menu icon
        if (navLinks.classList.contains("mobile-open")) {
            menuToggle.textContent = "✕";
            menuToggle.setAttribute("aria-label", "Close menu");
        } else {
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-label", "Open menu");
        }

    });


    // Close menu when a navigation link is clicked

    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("mobile-open");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute("aria-label", "Open menu");

        });

    });

}


// ===============================
// SMOOTH SCROLLING
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            const navbarHeight = document.querySelector(".navbar")
                ? document.querySelector(".navbar").offsetHeight
                : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.pageYOffset -
                navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        }

    });

});


// ===============================
// ACTIVE NAVIGATION LINK
// ===============================

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(
    '.nav-links a[href^="#"]'
);

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (
            currentSection &&
            link.getAttribute("href") === "#" + currentSection
        ) {
            link.classList.add("active");
        }

    });

});


// ===============================
// FOOTER YEAR
// ===============================

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(element => {

    element.textContent = new Date().getFullYear();

});


// ===============================
// PAGE LOADED
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    document.body.classList.add("page-loaded");

});