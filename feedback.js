const menuBtn =
    document.getElementById("menuBtn");

const mobileNav =
    document.getElementById("mobileNav");


/* ================= MOBILE MENU ================= */

menuBtn.addEventListener("click", () => {

    mobileNav.classList.toggle("show");

});


const mobileLinks =
    mobileNav.querySelectorAll("a");


mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("show");

    });

});


/* ================= FEEDBACK FORM ================= */

const feedbackForm =
    document.getElementById("feedbackForm");

const feedbackMessage =
    document.getElementById("feedbackMessage");


feedbackForm.addEventListener("submit", event => {

    event.preventDefault();

    feedbackMessage.textContent =
        "Thank you. Your feedback has been received.";

    feedbackForm.reset();

});
