const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");


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


/* ================= PASSWORD VISIBILITY ================= */

const password =
    document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");


togglePassword.addEventListener("click", () => {

    if (password.type === "password") {

        password.type = "text";

        togglePassword.textContent = "Hide";

    } else {

        password.type = "password";

        togglePassword.textContent = "Show";

    }

});


/* ================= LOGIN ================= */

const loginForm =
    document.getElementById("loginForm");

const loginMessage =
    document.getElementById("loginMessage");


loginForm.addEventListener("submit", event => {

    event.preventDefault();

    loginMessage.textContent =
        "Login system will connect to the VORVENA backend.";

});


/* ================= FORGOT PASSWORD ================= */

const forgotPassword =
    document.getElementById("forgotPassword");


forgotPassword.addEventListener("click", event => {

    event.preventDefault();

    loginMessage.textContent =
        "Password recovery will be connected to the backend.";

});


/* ================= FEEDBACK ================= */

const feedbackBtn =
    document.getElementById("feedbackBtn");


feedbackBtn.addEventListener("click", event => {

    event.preventDefault();

    alert("Feedback system coming soon.");

});
