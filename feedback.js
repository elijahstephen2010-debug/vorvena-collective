const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

const navItems =
    document.querySelectorAll(".nav-link");

navItems.forEach((link) => {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {

        link.classList.add("active");

    } else {

        link.classList.remove("active");

    }

});


/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        navLinks.classList.toggle("open");

        const isOpen =
            navLinks.classList.contains("open");

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    const mobileLinks =
        navLinks.querySelectorAll("a");

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


/* ================= FEEDBACK FORM ================= */

const feedbackForm =
    document.getElementById("feedbackForm");

const formMessage =
    document.getElementById("formMessage");

if (feedbackForm && formMessage) {

    feedbackForm.addEventListener("submit", (event) => {

        event.preventDefault();

        formMessage.textContent =
            "Thank you for your feedback. Your message is ready to be connected to the VORVENA backend.";

        feedbackForm.reset();

    });

}